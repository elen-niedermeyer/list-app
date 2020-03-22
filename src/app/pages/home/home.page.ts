import { Component } from '@angular/core';

import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public listsService: ListsService
  ) {
    listsService.updateListsObservable();
    listsService.lists.toPromise().then(data => console.log(data));
  }

}
