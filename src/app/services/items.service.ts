import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToDoItem } from '../item';

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
}
