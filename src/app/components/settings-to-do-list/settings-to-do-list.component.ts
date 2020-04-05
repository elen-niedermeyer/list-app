import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavParams, PopoverController } from '@ionic/angular';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-settings-to-do-list',
  templateUrl: './settings-to-do-list.component.html',
  styleUrls: ['./settings-to-do-list.component.scss'],
})
export class SettingsToDoListComponent implements OnInit {

  listDocId: string

  constructor(
    private listsService: ListsService,
    private errorAlertService: ErrorAlertService,
    private router: Router,
    private alertController: AlertController,
    private navParams: NavParams,
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
    this.listDocId = this.navParams.get('docId')
  }

  goToEditPage() {
    this.router.navigate(['/edit-list', this.listDocId])
    this.popoverController.dismiss()
  }

  async deleteList() {
    const alert = await this.alertController.create({
      header: 'Delete List',
      message: 'Are you sure you want to delete this list?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: async () => {
            this.handleListDeletion()
          }
        }]
    })

    this.popoverController.dismiss()
    await alert.present()
  }

  private async handleListDeletion() {
    let res = await this.listsService.deleteList(this.listDocId)
    if (res.result) {
      this.router.navigate([''])
    } else {
      // an error appeared
      this.errorAlertService.showErrorAlert(res.data);
    }
  }

}
