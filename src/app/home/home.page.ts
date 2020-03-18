import { Component } from '@angular/core';

import { ListsService } from '../services/lists.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lists;

  constructor(
    private listsService: ListsService
  ) {
    this.lists = this.listsService.getLists();
  }

}
