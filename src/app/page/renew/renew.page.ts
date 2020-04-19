import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.page.html',
  styleUrls: ['./renew.page.scss'],
})
export class RenewPage implements OnInit {
  renewForm = new FormGroup({
        numeroPolice: new FormControl(null, [Validators.required]),
  });
  constructor(private location: Location,
              public alertController: AlertController,
              public subscriptionService: SubscriptionService) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cofirmation',
      message: "Voulez-vous vraiment soumettre votre réclamation ?",
      cssClass: "custom-alert",
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Valider',
          handler: () => {
            this.saveData();
          }
        }
      ]
    });

    await alert.present();
  }

  getData(){
    this.subscriptionService.getContract(this.renewForm.value).subscribe((resp) => {

    });
  }

  saveData(){
    this.subscriptionService.saveReturnment(this.renewForm.value).subscribe((resp) => {
      if(resp['responseCode'] == 200){
        this.subscriptionService.showSuccessMessage("Votre demande  été bien prise en compte.");
        this.renewForm.reset();
      }else{
        this.subscriptionService.showErrorMessage("Votre demande n'a pas été enregistré. Veuillez réessayer SVP");
      }
    }, error => {
      this.subscriptionService.showErrorMessage("Votre demande n'a pas été enregistré. Veuillez réessayer SVP");
    });
  }

  goBack(){
    this.location.back();
  }


}
