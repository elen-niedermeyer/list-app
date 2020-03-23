import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../list'; import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  lists: Observable<Array<List>>;
  private listsCollection: AngularFirestoreCollection<List>;

  constructor(private firestore: AngularFirestore) {
    this.updateListsObservable;
  }

  updateListsObservable() {
    this.listsCollection = this.firestore.collection<List>('lists')
    this.lists = this.listsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  // TODO: there could be several
  /*filterForList(id): List {
    return lists.filter(list => {
      if (list.id == id) {
        return list;
      }
    })[0];
  }*/

  // TODO: correct post to server
  addList(newList: List): Promise<boolean> {
    return this.listsCollection.add(newList)
      .then(() => { return true; })
      .catch(() => { return false; });
  }

}
