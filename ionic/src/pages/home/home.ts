import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';
import { QrScanPage } from '../qr-scan/qr-scan';
import { RetornoNotaPage } from '../retorno-nota/retorno-nota';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  campanhas : any = [];
  data : any = {};
  cards : any = [];
  id_card : any = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
    ){
     
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToQR(){
    this.navCtrl.push(QrScanPage);
  }

  ionViewDidLoad() {
    this.loadCard();
    var painho = this;
    setInterval(function(){
      painho.loadPromo();
    },10000);
  }

  loadCard(){
    //Dados da Busca
    var postData = JSON.stringify({
      
    });

    //Loader
    const loader = this.loadingCtrl.create({
      content: "Carregando Novidades"
    });
    loader.present();

    //Conectar
    this.http.post( "https://velhobit.com.br/shoppingrecife/dados/postcards.php", postData, {withCredentials: true}).subscribe(data => {
      
      this.data.response = data["_body"];
      var retorno = JSON.parse(this.data.response);
      console.log(retorno);
      
      //Carregar cards
      this.cards = retorno;

      loader.dismiss(); //Retirar Loader

      if(retorno.error){
        const alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: retorno.error,
          buttons: ['Entendi']
        });
        alert.present();
      }
    }, error => {
      //Erro ao ao acessar fonte de dados
      const alert = this.alertCtrl.create({
        title: 'Problemas na conexão',
        subTitle: "Não é possível conectar à fonte de dados.",
        buttons: ['OK']
      });
      alert.present();
    });
  }

  loadPromo(){
    //Dados da Busca
    var postData = JSON.stringify({
      
    });

    //Loader
    const loader = this.loadingCtrl.create({
      content: "Carregando Novidades"
    });
   // loader.present();

    //Conectars
    this.http.post( "https://velhobit.com.br/shoppingrecife/dados/cap_campanha.php", postData, {withCredentials: true}).subscribe(data => {
      
      this.data.response = data["_body"];
      var retorno = JSON.parse(this.data.response);
      console.log(retorno);
  
      
      for(var i=0; i< retorno.length; i++){
        var item = retorno[i];

        if(!this.campanhas.includes(item.id)){
          if(parseInt(item.tipo) == 1){
            //Carregar card
            this.cards.unshift(item);

            console.log(this.cards);
          }else{
            let retornoModal = this.modalCtrl.create(RetornoNotaPage, { mensagem: item.conteudo, pontos: item.titulo, img : item.img_url });
            retornoModal.present();
          }

          this.campanhas.push(item.id);
        }
      }
  
     // loader.dismiss(); //Retirar Loader

      if(retorno.error){
        const alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: retorno.error,
          buttons: ['Entendi']
        });
       // alert.present();
      }
    }, error => {
      //Erro ao ao acessar fonte de dados
      const alert = this.alertCtrl.create({
        title: 'Problemas na conexão',
        subTitle: "Não é possível conectar à fonte de dados.",
        buttons: ['OK']
      });
     // alert.present();
    });
  }


}
