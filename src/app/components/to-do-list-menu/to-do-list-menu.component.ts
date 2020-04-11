import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-to-do-list-menu',
  templateUrl: './to-do-list-menu.component.html',
  styleUrls: ['./to-do-list-menu.component.scss'],
})
export class ToDoListMenuComponent implements OnInit {

  listDocId: string

  constructor(
    private listService: ToDoListService,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.listDocId = this.navParams.get('docId')
  }

  goToEditPage() {
    this.popoverController.dismiss()
    this.listService.editList(this.listDocId)
  }

  deleteList() {
    this.popoverController.dismiss()
    this.listService.deleteList(this.listDocId)
  }

}
