import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { ToDoListMenuComponent } from 'src/app/components/to-do-list-menu/to-do-list-menu.component';
import { ToDoItemDatabaseService } from 'src/app/services/to-do-item-database.service';
import { ToDoList } from 'src/app/to-do-list';
import { ToDoListDatabaseService } from '../../../services/to-do-list-database.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.page.html',
  styleUrls: ['./view-list.page.scss'],
})
export class ViewListPage implements OnInit {

  list: ToDoList = {
    name: "",
    creation_date: null,
    items: []
  }; /*TODO: was mache ich damit?*/

  areCheckedItemsShown: boolean = false;

  constructor(
    private listDBService: ToDoListDatabaseService,
    private itemDBService: ToDoItemDatabaseService,
    private route: ActivatedRoute,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDBService.getList(params.get('listId'))
        .pipe(take(1))
        .subscribe(list => {
          this.list = list
          this.itemDBService.getItemsFromList(this.list.docId)
            .pipe(take(1))
            .subscribe(items => {
              this.list.items = items
            })
        });
    })
  }

  filterUncheckedItems() {
    return this.list.items.filter(item => { return !item.completed; });
  }

  filterCheckedItems() {
    return this.list.items.filter(item => { return item.completed; });
  }

  toggleShowCheckedItems() {
    this.areCheckedItemsShown = !this.areCheckedItemsShown;
  }

  async showListSettingsPopover(event) {
    const popover = await this.popoverController.create({
      component: ToDoListMenuComponent,
      event: event,
      componentProps: { docId: this.list.docId }
    })

    return await popover.present()
  }

}