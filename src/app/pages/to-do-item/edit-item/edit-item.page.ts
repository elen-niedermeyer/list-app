import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoItem } from 'src/app/to-do-item';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ToDoItemsService } from 'src/app/services/to-do-items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {

  listDocId: string
  item: ToDoItem = {
    name: "",
    creation_date: "",
    completed: false,
  } /*TODO*/

  constructor(
    private itemsService: ToDoItemsService,
    private errorAlertService: ErrorAlertService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listDocId = params.get('listId')
      this.itemsService.getItem(this.listDocId, params.get('itemId'))
        .subscribe(item => {
          this.item = item
        })
    })
  }

  async submitUpdateItemForm() {
    let res = await this.itemsService.updateItem(this.listDocId, this.item)
    if (res.result) {
      this.router.navigate(['/item', this.listDocId, this.item.docId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

  /* TODO: redundant with settings */
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

    await alert.present()
  }

  private async handleItemDeletion() {
    let res = await this.itemsService.deleteItem(this.listDocId, this.item.docId)
    if (res.result) {
      this.router.navigate(['/list', this.listDocId])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
