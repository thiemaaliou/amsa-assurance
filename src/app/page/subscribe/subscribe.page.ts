import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController, IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { constData } from 'src/app/helpers/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
import {Location} from "@angular/common";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  @ViewChild('onBoardSlide', {static: false}) onBoardSlide: IonSlides;
  @ViewChild(IonContent, {static: false}) ionContent: IonContent;
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
  paymentMethods = [];
  dateTime = Math.floor(Date.now() / 1000);
  key = "676AC4CC226201685E89ADB0C9B4510D";
  paymentForm = {
    timestamp: this.dateTime,
    returnUrl: environment.baseApiUrl+'payment',
    auth: CryptoJS.MD5(this.key).toString(CryptoJS.enc.Hex),
    amount: 500,
    requestId: this.dateTime,
    terminalNumber: 160820000101,
    transactionCurrencyCode: 'XOF'
  }
  souscriptionForm = new FormGroup({
    duree: new FormControl(null, [Validators.required]),
    formule: new FormControl(null, [Validators.required]),
    canal: new FormControl(1, [Validators.required]),
    montant: new FormControl(10000, [Validators.required]),
    souscripteur: new FormGroup({
      prenom: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      genre: new FormControl(null),
      email: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      telephone: new FormControl(null, [Validators.required]),
      numeroCni: new FormControl(null, [Validators.required])
    }),
    assure: new FormGroup({
      prenom: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      numeroTelephone: new FormControl(null, [Validators.required]),
      numeroCni: new FormControl(null, [Validators.required]),
      adresse: new FormControl(null, [Validators.required]),
      lateralite: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required])
    }),
    beneficiaire: new FormGroup({
      prenom: new FormControl(null, [Validators.required]),
      nom: new FormControl(null, [Validators.required]),
      dateNaissance: new FormControl(null, [Validators.required]),
      numeroTelephone: new FormControl(null, [Validators.required]),
      numeroCni: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      adresse: new FormControl(null, [Validators.required])
    }),
  });
  slideActiveIndex: number = 0;
  listImg: any = [
    '../../../assets/images/free.png',
    '../../../assets/images/om.png',
    '../../../assets/images/mastercard.png',
    '../../../assets/images/visa.png'
  ];
  constructor(private route: Router,
              private subscriptionService: SubscriptionService,
              public alertController: AlertController,
              private location: Location,
              private appBrowser: InAppBrowser,
              private http: HTTP
              ) {
          this.customPickerOptions = {
              buttons: [{
                text: 'Enregistrer',
                handler: (event) => console.log(event)
              }, {
                text: 'Annuler',
                handler: () => {
                  return false;
                }
              }]
            }
  }

  ngOnInit() {
    this.getFormules();
    this.getDuration();
    this.getPaymentMethods();
    this.paymentForm.returnUrl = this.location['_platformLocation'].location.host+'/success-payment';
    this.http.setDataSerializer('json');
    this.http.setHeader('*', 'Content-Type', 'application/json');

    // this.subscriptionService.initiateOnlinePayment(this.paymentForm).subscribe((respApg) =>{
    //   let d: any = respApg;
    //   console.log('thiema', JSON.parse(d));
    //    this.subscriptionService.showSuccessMessage("Inscription effectuée avec succès. Vous allez être redirigé vers la page de paiement");
    //    setTimeout(() => {
    //      window.open(respApg['paymentUrl'], "_blank");
    //      const bwrser = this.appBrowser.create(respApg['paymentUrl']);
    //      bwrser.show();
    //    }, 4000)
    // });
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
    this.sendingRequest = true;
    this.subscriptionService.saveSouscription(data).subscribe((resp) =>{
      this.sendingRequest = false;
      if(resp['responseCode'] == 200){
        let hash = this.paymentForm.amount+resp['data'].id+'XOF'+this.key;
        this.paymentForm.requestId = resp['data'].id;
        this.paymentForm.auth = CryptoJS.MD5(hash).toString(CryptoJS.enc.Hex);
        this.http.post(environment.paymentApiUrl, this.paymentForm, {})
              .then(data => {
                 this.subscriptionService.showSuccessMessage("Inscription effectuée avec succès. Vous allez être redirigé vers la page de paiement");
                  let urlData = JSON.parse(data.data);
                  setTimeout(() => {
                    const bwrser = this.appBrowser.create(urlData['paymentUrl']);
                    bwrser.show();
                  }, 4000);
              })
              .catch(error => {
                this.subscriptionService.showErrorMessage("Impossible de procéder au paiement pour le moment. Veuillez-vous rendre à l'agence SVP");
              });
      }else{
        this.subscriptionService.showErrorMessage("Erreur lors de l'inscription. Veuillez réessayer SVP");
      }
    }, error => {
      this.sendingRequest = false;
      this.subscriptionService.showErrorMessage("Erreur lors de l'inscription. Veuillez réessayer SVP");
    });



  }

  onDateSelect(event, groupName, controlName){
    this.souscriptionForm.get(''+groupName).get(''+controlName).setValue(new Date(event.year+'/'+event.month+'/'+event.day));
  }

  getPaymentMethods(){
    this.sendingRequest = true;
    this.subscriptionService.getPaymentMethods().subscribe((resp) => {
       this.paymentMethods = resp['data'];
       this.sendingRequest = false;
    }, error => {
      this.sendingRequest = false;
    });
  }

  getFormules(){
    this.subscriptionService.getFormules().subscribe((resp) => {
        this.formules = resp['data'];
    }, error => {
      });
  }

  getDuration(){
    this.subscriptionService.getDuration().subscribe((resp) =>{
      this.durees  = resp['data'];
    });
  }

  selectFormule(item){
    let duree = this.durees.filter((d) => d.formule.id == item);
    this.souscriptionForm.get('formule').setValue(item);

    if(duree){
      this.avalaibleDuration = duree;
      //this.ionContent.scrollToBottom(300);
    }
  }
  selectDuration(item){
    this.souscriptionForm.get('duree').setValue(item.id);
    this.souscriptionForm.get('montant').setValue(item.price);
  }

 selectPaymentMethod(item){
   this.paymentMethod = item.id;
 }


  setFormAssure(){
    if(this.assure == 1){
      this.souscriptionForm.get('assure').patchValue(this.souscriptionForm.get('souscripteur').value);
      this.souscriptionForm.get('assure').get('numeroTelephone').setValue(this.souscriptionForm.get('souscripteur').get('telephone').value);
      //this.souscriptionForm.get('assure').disable();
    }
  }

  setAssure(n){
    this.assure = n;
  }

  nextSlide(){
    // this.onBoardSlide.getActiveIndex().then((index) =>{
    //
    //   if(index == 0){
    //     if(this.souscriptionForm.get('duree').value > 0 && this.assure > 0){
    //       this.goToNextSlide();
    //     }else{
    //       this.subscriptionService.showErrorMessage("Veuillez choisir une durée et un assuré");
    //     }
    //   }else
    //   if(index == 1){
    //     if(this.souscriptionForm.get('souscripteur').invalid){
    //       this.subscriptionService.showErrorMessage("Veuillez remplir tous les champs SVP");
    //     }else{
    //       this.setFormAssure();
    //       this.goToNextSlide();
    //     }
    //   }else
    //   if(index == 2){
    //     if(this.souscriptionForm.get('assure').invalid){
    //       this.subscriptionService.showErrorMessage("Veuillez remplir tous les champs SVP");
    //     }else{
    //       this.goToNextSlide();
    //     }
    //   }else
    //   if(index == 3){
    //     if(this.souscriptionForm.get('beneficiaire').invalid){
    //       this.subscriptionService.showErrorMessage("Veuillez remplir tous les champs SVP");
    //     }else{
    //       this.presentAlertConfirm();
    //     }
    //   }
    // });
    this.goToNextSlide();
    this.ionContent.scrollToTop(300);

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
