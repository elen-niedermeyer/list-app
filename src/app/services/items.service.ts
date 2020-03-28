import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  addItemToList(listDocId: string, newItem: ToDoItem): Promise<Response> {
    let itemsCollection = this.firestore.collection<ToDoItem>('lists/' + listDocId + '/items')
    return itemsCollection.add(newItem)
      .then(newDoc => { return { result: true, data: newDoc.id } })
      .catch(error => { return { result: false, data: error } })
  }

}