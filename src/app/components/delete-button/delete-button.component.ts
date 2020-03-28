import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ElementTypes } from 'src/app/element-types.enum';
import { ErrorAlertService } from 'src/app/services/error-alert.service';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {

  @Input() type: ElementTypes
  @Input() docId: string

  constructor(
    private alertController: AlertController,
    private listsService: ListsService,
    private errorAlertService: ErrorAlertService,
    private router: Router
  ) { }

  async deleteElement() {
    const alert = await this.alertController.create({
      header: 'Delete ' + this.type,
      message: 'Are you sure you want to delete this ' + this.type + '?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: async () => {
            let res = await this.listsService.deleteList(this.docId)
            if (res.result) {
              this.router.navigate([''])
            } else {
              // an error appeared
              this.errorAlertService.showErrorAlert(res.data);
            }
          }
        }]
    })

    await alert.present()
  }

}
