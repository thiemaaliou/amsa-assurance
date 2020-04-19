import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { SubscriptionService } from 'src/app/services/subscription.service';
@Component({
  selector: 'app-returnment',
  templateUrl: './returnment.page.html',
  styleUrls: ['./returnment.page.scss'],
})
export class ReturnmentPage implements OnInit {
  returnmentForm = new FormGroup({
        prenom: new FormControl(null, [Validators.required]),
        nom: new FormControl(null, [Validators.required]),
        telephone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        motif: new FormControl(null, [Validators.required]),
        commentaire: new FormControl(null, [Validators.required]),
        etat: new FormControl("En cours", [Validators.required]),
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

  saveData(){
    this.subscriptionService.saveReturnment(this.returnmentForm.value).subscribe((resp) => {
      if(resp['responseCode'] == 200){
        this.subscriptionService.showSuccessMessage("Votre demande  été bien prise en compte.");
        this.returnmentForm.reset();
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
