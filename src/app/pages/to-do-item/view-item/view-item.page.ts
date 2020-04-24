import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { ToDoItemMenuComponent } from 'src/app/components/to-do-item-menu/to-do-item-menu.component';
import { ToDoItemDatabaseService } from 'src/app/services/to-do-item-database.service';
import { ToDoItemService } from 'src/app/services/to-do-item.service';
import { ToDoItem } from 'src/app/to-do-item';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {

  listDocId: string
  item: ToDoItem = {
    name: "",
    creation_date: "",
    completed: false,
  } /*TODO*/

  constructor(
    public itemService: ToDoItemService,
    private itemDBService: ToDoItemDatabaseService,
    private route: ActivatedRoute,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemDBService.getItem(this.listDocId, params.get('itemId'))
        .pipe(take(1))
        .subscribe(item => {
          this.item = item
        })
    })
  }

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

  /*TODO handle error when updating completed value (see template) */

}
