import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ToDoItem } from 'src/app/item';
import { SettingsToDoItemComponent } from '../settings-to-do-item/settings-to-do-item.component';

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
      component: SettingsToDoItemComponent,
      event: event,
      componentProps: {
        listDocId: this.listDocId,
        itemDocId: this.item.docId
      }
    })

    return await popover.present()
  }

}
