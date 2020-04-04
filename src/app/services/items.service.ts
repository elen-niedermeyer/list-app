import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ToDoItem } from '../item';
import { Response } from '../response';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private firestore: AngularFirestore) { }

  getItemsFromList(listDocId: string): Observable<Array<ToDoItem>> {
    let itemsCollection = this.firestore.collection<ToDoItem>('lists/' + listDocId + '/items')
    return itemsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const docId = a.payload.doc.id
          return { docId, ...data }
        })
      })
    )
  }

  getItem(listDocId: string, itemDocId: string): Observable<ToDoItem> {
    let itemsCollection = this.firestore.collection<ToDoItem>('lists/' + listDocId + '/items')
    return itemsCollection.doc<ToDoItem>(itemDocId)
      .valueChanges()
      .pipe(
        take(1),
        map((item: ToDoItem) => {
          item.docId = itemDocId
          return item
        })
      );
  }

  addItemToList(listDocId: string, newItem: ToDoItem): Promise<Response> {
    let itemsCollection = this.firestore.collection<ToDoItem>('lists/' + listDocId + '/items')
    return itemsCollection.add(newItem)
      .then(newDoc => { return { result: true, data: newDoc.id } })
      .catch(error => { return { result: false, data: error } })
  }

  update(listDocId: string, item: ToDoItem): Promise<Response> {
    let itemsCollection = this.firestore.collection<ToDoItem>('lists/' + listDocId + '/items')
    return itemsCollection.doc(item.docId).update({ name: item.name, due_date: item.due_date, note: item.note })
      .then(() => { return { result: true, data: null } })
      .catch(error => { return { result: false, data: error } })
  }

  updateCompletedProperty(listDocId: string, item: ToDoItem): Promise<Response> {
    if (item.completed) {
      item.completed_date = new Date().toISOString()
    }

    let itemsCollection = this.firestore.collection<ToDoItem>('lists/' + listDocId + '/items')
    return itemsCollection.doc(item.docId).update({ completed: item.completed, completed_date: item.completed_date })
      .then(() => { return { result: true, data: null } })
      .catch(error => { return { result: false, data: error } })
  }

}