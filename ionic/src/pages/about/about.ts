import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data:any = {};
  conversation:any = [];
  chat:string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {
    
  }

  enviarMensagem(){
    var postData = JSON.stringify({
      texto: this.chat
    });

    this.conversation.push({class:"me", text: this.chat});

    this.chat = "";

    this.http.post( "https://velhobit.com.br/shoppingrecife/dados/watson.php", postData,{withCredentials: true}).subscribe(data => {
      this.data.response = data["_body"];
      
      var retorno = JSON.parse(this.data.response);
      console.warn(retorno);
      if(retorno.output.text && retorno.output.text != ""){
        console.warn(retorno.output.text);
        var i = Math.floor((Math.random() * retorno.output.text.length) + 1) - 1;
        this.conversation.push({class:"sabrina", text: retorno.output.text[i]});
        return true;
      }else{
        this.conversation.push({class:"sabrina", text: "Desculpa, eu não entendi o que você disse. Pode repetir?"});
        return false;
      }
    

      //this.data.response = data["_body"];
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

}
