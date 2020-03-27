import { Component } from '@angular/core';

import { ListsService } from '../../services/lists.service';
import { ElementTypes } from 'src/app/element-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  deleteButtonType = ElementTypes.TYPE_LIST

  constructor(
    public listsService: ListsService
  ) {
    listsService.updateListsObservable();
  }

}
