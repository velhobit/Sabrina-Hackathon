import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the RetornoNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retorno-nota',
  templateUrl: 'retorno-nota.html',
})
export class RetornoNotaPage {
  pontos: any;
  mensagem: string = "";
  img : string = "";
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController) {
    this.mensagem = params.get('mensagem');
    this.pontos = params.get('pontos');
    this.img = params.get('img');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetornoNotaPage');
    
    const toast = this.toastCtrl.create({
      message: this.mensagem,
      position: "bottom",
      duration: 10000
    });

  
    toast.present();
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }



}
