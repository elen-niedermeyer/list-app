import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ToDoListOptionsService } from 'src/app/services/to-do-list-options.service';

@Component({
  selector: 'app-to-do-list-menu',
  templateUrl: './to-do-list-menu.component.html',
  styleUrls: ['./to-do-list-menu.component.scss'],
})
export class ToDoListMenuComponent implements OnInit {

  listDocId: string

  constructor(
    private listOptionsService: ToDoListOptionsService,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.listDocId = this.navParams.get('docId')
  }

  goToEditPage() {
    this.popoverController.dismiss()
    this.listOptionsService.editList(this.listDocId)
  }

  deleteList() {
    this.popoverController.dismiss()
    this.listOptionsService.deleteList(this.listDocId)
  }

}
