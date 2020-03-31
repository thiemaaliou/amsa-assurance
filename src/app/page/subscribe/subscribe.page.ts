import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { constData } from 'src/app/helpers/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  @ViewChild('onBoardSlide', {static: false}) onBoardSlide: IonSlides;
  customPickerOptions: any;
  assetsUrl: string = environment.assetsUrl;
  data: any = constData;
  formules = [];
  durees = [];
  avalaibleDuration = [];
  sendingRequest: boolean = false;
  beneficiaryChoosen: boolean = false;
  paymentMethod: number;
  assure: number = 1;
  paymentMethods = [
    {
      id: 1,
      title: "Paiement en agence",
      image: environment.assetsUrl+'images/cash.png'
    },
    {
      id: 2,
      title: "Paiement par carte",
      image: environment.assetsUrl+'images/carte.png'
    },
    {
      id: 3,
      title: "Paiement par wallet",
      image: environment.assetsUrl+'images/wallet.png'
    }
  ]
  souscriptionForm = new FormGroup({
      duree: new FormControl(null, [Validators.required]),
      formule: new FormControl(null, [Validators.required]),
      canal: new FormControl(1, [Validators.required]),
      montant: new FormControl(10000, [Validators.required]),
      souscripteur: new FormGroup({
        prenom: new FormControl(null, [Validators.required]),
        nom: new FormControl(null, [Validators.required]),
        genre: new FormControl(null, [Validators.required]),
        dateNaissance: new FormControl(null, [Validators.required]),
        telephone: new FormControl(null, [Validators.required]),
        numeroCni: new FormControl(null, [Validators.required])
      }),
      assure: new FormGroup({
        prenom: new FormControl(null, [Validators.required]),
        nom: new FormControl(null, [Validators.required]),
        dateNaissance: new FormControl(null, [Validators.required]),
        numeroTelephone: new FormControl(null),
        numeroCni: new FormControl(null),
        adresse: new FormControl(null, [Validators.required]),
        lateralite: new FormControl(null),
        genre: new FormControl(null, [Validators.required])
      }),
      beneficiaire: new FormGroup({
        prenom: new FormControl(null, [Validators.required]),
        nom: new FormControl(null, [Validators.required]),
        dateNaissance: new FormControl(null, [Validators.required]),
        numeroTelephone: new FormControl(null, [Validators.required]),
        numeroCni: new FormControl(null),
        genre: new FormControl(null, [Validators.required]),
        adresse: new FormControl(null, [Validators.required])
      }),
  });
  slideActiveIndex: number = 0;
  constructor(private route: Router,
              private subscriptionService: SubscriptionService,
              public alertController: AlertController
              ) {
          this.customPickerOptions = {
              buttons: [{
                text: 'Enregistrer',
                handler: (event) => console.log(event)
              }, {
                text: 'Annuler',
                handler: () => {
                  console.log('Clicked Log. Do not Dismiss.');
                  return false;
                }
              }]
            }
  }

  ngOnInit() {
    this.getFormules();
    this.getDuration();
  }

  ngAfterViewInit(){
    this.onBoardSlide.lockSwipes(true);
  }

  saveData(){
    let data = {
      ...this.souscriptionForm.value
    };
    if(this.assure == 1){
      data.assure == data.souscripteur;
    }

    this.subscriptionService.saveSouscription(data).subscribe((resp) =>{

    });
  }

  onDateSelect(event, groupName, controlName){
    console.log(this.souscriptionForm.get(''+groupName).get(''+controlName).value)
    this.souscriptionForm.get(''+groupName).get(''+controlName).setValue(new Date(event.year+'/'+event.month+'/'+event.day));
  }

  getFormules(){
    this.sendingRequest = true;
    this.subscriptionService.getFormules().subscribe((resp) => {
        this.formules = resp['data'];
        this.sendingRequest = false;
    }, error => {
        this.sendingRequest = false
      });
  }

  getDuration(){
    this.subscriptionService.getDuration().subscribe((resp) =>{
      this.durees  = resp['data'];
    });
  }

  selectFormule(item){
    let duree = this.durees.filter((d) => d.formule.id == item.id);
    this.souscriptionForm.get('formule').setValue(item.id);

    if(duree){
      this.avalaibleDuration = duree;
    }
  }
  selectDuration(item){
    this.souscriptionForm.get('duree').setValue(item.id);
  }

 selectPaymentMethod(item){
   this.paymentMethod = item.id;
 }


  setFormAssure(){
    if(this.assure == 1){
      this.souscriptionForm.get('assure').patchValue(this.souscriptionForm.get('souscripteur').value);
      this.souscriptionForm.get('assure').get('numeroTelephone').setValue(this.souscriptionForm.get('souscripteur').get('telephone').value);
      this.souscriptionForm.get('assure').disable();
    }
  }

  setAssure(n){
    this.assure = n;
  }

  nextSlide(){
    this.onBoardSlide.getActiveIndex().then((index) =>{
      console.log(index);
      if(index == 0){
        if(this.souscriptionForm.get('duree').value > 0 && this.assure > 0){
          this.goToNextSlide();
        }else{
          this.subscriptionService.showErrorMessage("Veuillez choisir une durée et un assuré");
        }
      }else
      if(index == 1){
        if(this.souscriptionForm.get('souscripteur').invalid){
          this.subscriptionService.showErrorMessage("Veuillez remplir tous les champs SVP");
        }else{
          this.goToNextSlide();
        }
      }else
      if(index == 2){
        if(this.souscriptionForm.get('assure').invalid){
          this.subscriptionService.showErrorMessage("Veuillez remplir tous les champs SVP");
        }else{
          this.goToNextSlide();
        }
      }else
      if(index == 3){
        if(this.souscriptionForm.get('beneficiaire').invalid){
          this.subscriptionService.showErrorMessage("Veuillez remplir tous les champs SVP");
        }else{
          this.presentAlertConfirm();
        }
      }
    });

  }

  goToNextSlide(){
    this.onBoardSlide.lockSwipes(false);
    this.onBoardSlide.isEnd().then((result) => {
       if(result){

       }else{
         this.slideActiveIndex+= 1;
         this.onBoardSlide.slideNext();
         this.onBoardSlide.lockSwipes(true);
       }
    });
  }

  prevSlide(){
    this.onBoardSlide.lockSwipes(false);
    this.onBoardSlide.isBeginning().then((result) => {
       if(result){
         this.slideActiveIndex = 0;
       }else{
         this.slideActiveIndex-= 1;
         this.onBoardSlide.slidePrev();
         this.onBoardSlide.lockSwipes(true);
       }
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Cofirmation',
      message: "Voulez-vous vraiment soumettre votre demande ?",
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

}
