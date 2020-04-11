import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ToDoItemService } from 'src/app/services/to-do-item.service';

@Component({
  selector: 'app-to-do-item-menu',
  templateUrl: './to-do-item-menu.component.html',
  styleUrls: ['./to-do-item-menu.component.scss'],
})
export class ToDoItemMenuComponent implements OnInit {

  listDocId: string
  itemDocId: string

  constructor(
    private itemService: ToDoItemService,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.listDocId = this.navParams.get('listDocId')
    this.itemDocId = this.navParams.get('itemDocId')
  }

  goToEditPage() {
    this.popoverController.dismiss()
    this.itemService.editItem(this.listDocId, this.itemDocId)
  }

  deleteItem() {
    this.popoverController.dismiss()
    this.itemService.deleteItem(this.listDocId, this.itemDocId)
  }

}
