import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  listsUrl = '/assets/lists/lists.json';

  constructor(private http: HttpClient) { }

  getLists() {
    return this.http.get(this.listsUrl);
  }

}
