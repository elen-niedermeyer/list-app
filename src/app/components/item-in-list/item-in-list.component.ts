import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ToDoItem } from 'src/app/to-do-item';
import { ToDoItemMenuComponent } from '../to-do-item-menu/to-do-item-menu.component';

@Component({
  selector: 'app-item-in-list',
  templateUrl: './item-in-list.component.html',
  styleUrls: ['./item-in-list.component.scss'],
})
export class ItemInListComponent {

  @Input() listDocId: string
  @Input() item: ToDoItem

  constructor(private popoverController: PopoverController) { }

  async showItemSettingsPopover(event) {
    const popover = await this.popoverController.create({
      component: ToDoItemMenuComponent,
      event: event,
      componentProps: {
        listDocId: this.listDocId,
        itemDocId: this.item.docId
      }
    })

    return await popover.present()
  }

}
