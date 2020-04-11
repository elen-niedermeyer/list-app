import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Response } from '../response';
import { ToDoList } from '../to-do-list';

@Injectable({
  providedIn: 'root'
})
export class ToDoListDatabaseService {
  lists: Observable<Array<ToDoList>>;
  private listsCollection: AngularFirestoreCollection<ToDoList>;

  constructor(private firestore: AngularFirestore) {
    this.updateListsObservable;
  }

  getAllLists(): Observable<Array<ToDoList>> {
    this.updateListsObservable()
    return this.lists;
  }

  getList(docId: string): Observable<ToDoList> {
    this.updateListsObservable()
    return this.listsCollection.doc<ToDoList>(docId).valueChanges().pipe(
      take(1),
      map((list: ToDoList) => {
        list.docId = docId
        return list
      })
    );
  }

  addList(newList: ToDoList): Promise<Response> {
    return this.listsCollection.add(newList)
      .then(newDoc => { return { result: true, data: newDoc.id } })
      .catch(error => { return { result: false, data: error } })
  }

  // TODO: only updates name
  updateList(updatedList: ToDoList): Promise<Response> {
    return this.listsCollection.doc(updatedList.docId).update({ name: updatedList.name })
      .then(() => { return { result: true, data: null } })
      .catch(error => { return { result: false, data: error } })
  }

  deleteList(docId: string): Promise<Response> {
    return this.listsCollection.doc(docId).delete()
      .then(() => { return { result: true, data: null } })
      .catch(error => { return { result: false, data: error } })
  }

  private updateListsObservable() {
    this.listsCollection = this.firestore.collection<ToDoList>('lists')
    this.lists = this.listsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const docId = a.payload.doc.id
          return { docId, ...data }
        });
      })
    );
  }

}
