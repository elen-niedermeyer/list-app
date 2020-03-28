import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorAlertService {

  constructor(private alertController: AlertController) { }

  async showErrorAlert(error) {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: error,
      buttons: ['OK']
    })

    await alert.present()
  }
}
