import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ToDoItemOptionsService } from 'src/app/services/to-do-item-options.service';

@Component({
  selector: 'app-to-do-item-menu',
  templateUrl: './to-do-item-menu.component.html',
  styleUrls: ['./to-do-item-menu.component.scss'],
})
export class ToDoItemMenuComponent implements OnInit {

  listDocId: string
  itemDocId: string

  constructor(
    private itemOptionsService: ToDoItemOptionsService,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.listDocId = this.navParams.get('listDocId')
    this.itemDocId = this.navParams.get('itemDocId')
  }

  goToEditPage() {
    this.popoverController.dismiss()
    this.itemOptionsService.editItem(this.listDocId, this.itemDocId)
  }

  deleteItem() {
    this.popoverController.dismiss()
    this.itemOptionsService.deleteItem(this.listDocId, this.itemDocId)
  }

}
