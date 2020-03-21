import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../list';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  listsUrl = '../assets/data/lists.json';

  lists: Observable<Array<List>>;

  constructor(private http: HttpClient) {
    this.updateListsObservable;
  }

  updateListsObservable() {
    this.lists = this.http.get<Array<List>>(this.listsUrl);
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
    return this.getLists()
      .then(lists => {
        lists.push(newList);
        return this.http.post<List>(this.listsUrl, lists).toPromise()
          .then(() => { return true; })
          .catch(() => { return false; })
      })
      .catch(() => { return false; });
  }

  private async getLists(): Promise<Array<List>> {
    return this.lists.toPromise()
      .then(lists => { return lists; })
      .catch(() => { return new Array<List>(); });
  }

}
