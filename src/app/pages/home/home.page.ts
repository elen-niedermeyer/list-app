import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ToDoList } from 'src/app/to-do-list';
import { ToDoListMenuComponent } from '../../components/to-do-list-menu/to-do-list-menu.component';
import { ToDoListDatabaseService } from '../../services/to-do-list-database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listsObservable: Observable<ToDoList[]>

  constructor(
    public listDBService: ToDoListDatabaseService,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.listsObservable = this.listDBService.getAllLists()
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
