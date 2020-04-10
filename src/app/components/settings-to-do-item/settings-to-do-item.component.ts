import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavParams, PopoverController } from '@ionic/angular';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ToDoItemsService } from 'src/app/services/to-do-items.service';

@Component({
  selector: 'app-settings-to-do-item',
  templateUrl: './settings-to-do-item.component.html',
  styleUrls: ['./settings-to-do-item.component.scss'],
})
export class SettingsToDoItemComponent implements OnInit {

  listDocId: string
  itemDocId: string

  constructor(
    private itemsService: ToDoItemsService,
    private errorAlertService: ErrorAlertService,
    private router: Router,
    private alertController: AlertController,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.listDocId = this.navParams.get('listDocId')
    this.itemDocId = this.navParams.get('itemDocId')
  }

  goToEditPage() {
    this.router.navigate(['/edit-item', this.listDocId, this.itemDocId])
    this.popoverController.dismiss()
  }

  async deleteItem() {
    const alert = await this.alertController.create({
      header: 'Delete Item',
      message: 'Are you sure you want to delete this item?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: async () => {
            this.handleItemDeletion()
          }
        }]
    })

    this.popoverController.dismiss()
    await alert.present()
  }

  private async handleItemDeletion() {
    let res = await this.itemsService.deleteItem(this.listDocId, this.itemDocId)
    if (res.result) {
      this.router.navigate(['/list', this.listDocId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
