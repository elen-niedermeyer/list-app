import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ElementTypes } from 'src/app/element-types.enum';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent {

  @Input() type: ElementTypes
  @Input() docId: string

  constructor(private alertController: AlertController, private listsService: ListsService) { }

  async deleteElement() {
    const alert = await this.alertController.create({
      header: 'Delete ' + this.type,
      message: 'Are you sure you want to delete this ' + this.type + '?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.listsService.deleteList(this.docId)
            //TODO route to home
          }
        }]
    })

    await alert.present()
  }

}
