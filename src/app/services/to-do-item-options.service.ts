import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoItem } from '../to-do-item';
import { ErrorAlertService } from './error-alert.service';
import { ToDoItemDatabaseService } from './to-do-item-database.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemOptionsService {

  constructor(
    private itemDBService: ToDoItemDatabaseService,
    private errorAlertService: ErrorAlertService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async addItem(listDocId: string, item: ToDoItem) {
    let res = await this.itemDBService.addItem(listDocId, item);
    if (res.result) {
      this.router.navigate(['/list', listDocId]);
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

  isDateOverdue(itemDueDate) {
    let dueDate = new Date(itemDueDate).setHours(0, 0, 0, 0)
    let today = new Date().setHours(0, 0, 0, 0)
    return dueDate < today
  }

  editItem(listDocId: string, itemDocId: string) {
    this.router.navigate(['/edit-item', listDocId, itemDocId])
  }

  async updateItem(listDocId: string, item: ToDoItem) {
    let res = await this.itemDBService.updateItem(listDocId, item)
    if (res.result) {
      this.router.navigate(['/item', listDocId, item.docId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }

  }

  async deleteItem(listDocId: string, itemDocId: string) {
    const alert = await this.alertController.create({
      header: 'Delete Item',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: async () => {
            this.handleItemDeletion(listDocId, itemDocId)
          }
        }]
    })

    await alert.present()
  }

  private async handleItemDeletion(listDocId: string, itemDocId: string) {
    let res = await this.itemDBService.deleteItem(listDocId, itemDocId)
    if (res.result) {
      this.router.navigate(['/list', listDocId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }
}
