import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private httpClient: HttpClient, public toastController: ToastController) {   }

  login(){
    return this.httpClient.post(environment.baseApiUrl+'login', environment.defaultCredentials).pipe(response => response);
  }

	getFormules(){
		return this.httpClient.get(environment.baseApiUrl+'formules').pipe(response => response);
	}

  getDuration(){
    return this.httpClient.get(environment.baseApiUrl+'durees').pipe(response => response);
  }

  saveSouscription(data){
    return this.httpClient.post(environment.baseApiUrl+'souscriptions', data).pipe(response => response);
  }

  getPaymentMethods(){
    return this.httpClient.get(environment.baseApiUrl+'moyens-de-paiement').pipe(response => response);
  }

  async showErrorMessage(message){
    const toast = await this.toastController.create({
         message: message,
         duration: 4000,
         color: 'warning'
       });
       toast.present();
  }

  async showSuccessMessage(message){
    const toast = await this.toastController.create({
         message: message,
         duration: 4000,
         color: 'success'
       });
       toast.present();
  }
}
