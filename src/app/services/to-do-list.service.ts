import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoListDatabaseService } from 'src/app/services/to-do-list-database.service';
import { ToDoList } from '../to-do-list';
import { ErrorAlertService } from './error-alert.service';
import { ToDoItemDatabaseService } from './to-do-item-database.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(
    private listDBService: ToDoListDatabaseService,
    private itemDBService: ToDoItemDatabaseService,
    private errorAlertService: ErrorAlertService,
    private alertController: AlertController,
    private router: Router
  ) { }

  async addList(list: ToDoList) {
    let items = list.items.slice() // deep copy
    list.items = []

    let res = await this.listDBService.addList(list);
    if (res.result) {
      list.docId = res.data;

      // add items without error handling because the list is already created
      items.forEach(item => {
        if (item.name) {
          this.itemDBService.addItem(list.docId, item)
        }
      })

      this.router.navigate(['/list', list.docId], { replaceUrl: true });
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

  editList(listDocId: string) {
    this.router.navigate(['/edit-list', listDocId])
  }

  async updateList(list: ToDoList) {
    let res = await this.listDBService.updateList(list)
    if (res.result) {
      this.router.navigate(['/list', list.docId], { replaceUrl: true })
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

  async updateListProperty(listDocId: string, data: any) {
    let res = await this.listDBService.updateListProperty(listDocId, data)
    if (res.result) {
      this.router.navigate(['/list', listDocId], { replaceUrl: true })
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

  async deleteList(listDocId: string) {
    const alert = await this.alertController.create({
      header: 'Delete List',
      message: 'Are you sure you want to delete this list?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: async () => {
            this.handleListDeletion(listDocId)
          }
        }]
    })

    await alert.present()
  }

  private async handleListDeletion(listDocId: string) {
    let res = await this.listDBService.deleteList(listDocId)
    if (res.result) {
      this.router.navigate([''])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
