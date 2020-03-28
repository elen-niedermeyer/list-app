import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ToDoList } from '../list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  lists: Observable<Array<ToDoList>>;
  private listsCollection: AngularFirestoreCollection<ToDoList>;

  constructor(private firestore: AngularFirestore) {
    this.updateListsObservable;
  }

  updateListsObservable() {
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

  addList(newList: ToDoList): Promise<string> {
    return this.listsCollection.add(newList)
      .then(newDoc => { return newDoc.id })
      .catch(() => { return null })
  }

  // TODO: only updates name
  updateList(updatedList: ToDoList): Promise<boolean> {
    return this.listsCollection.doc(updatedList.docId).update({ id: updatedList.id })
      .then(() => { return true; })
      .catch(() => { return false; })
  }

  deleteList(docId: string): Promise<void> {
    return this.listsCollection.doc(docId).delete();
  }

}
