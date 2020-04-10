import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ToDoListMenuComponent } from '../../components/to-do-list-menu/to-do-list-menu.component';
import { ToDoListsService } from '../../services/to-do-lists.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public listsService: ToDoListsService,
    private popoverController: PopoverController
  ) {
    listsService.updateListsObservable();
  }

  async showListSettingsPopover(event, listDocId) {
    const popover = await this.popoverController.create({
      component: ToDoListMenuComponent,
      event: event,
      componentProps: { docId: listDocId }
    })

    return await popover.present()
  }

}
