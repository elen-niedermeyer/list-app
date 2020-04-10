import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SettingsToDoListComponent } from '../../components/settings-to-do-list/settings-to-do-list.component';
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
      component: SettingsToDoListComponent,
      event: event,
      componentProps: { docId: listDocId }
    })

    return await popover.present()
  }

}
