import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController } from 'ionic-angular';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner'
import { Http } from '@angular/http';
import { RetornoNotaPage } from '../retorno-nota/retorno-nota';
declare var Instascan;
/**
 * Generated class for the QrScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})

/**
 * QRCode está sendo usado de HTML5 para exibição no pitch
 * Ao colocacr em app, utilizar a versão compilada
 */
export class QrScanPage {
  url:string = "";
  data:any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
   // private qrScanner: QRScanner,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScanPage');
    this.scan();
    
    //this.save();
  }
  /*
  scan(){
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted

        this.qrScanner.show();
window.document.querySelector('ion-app').classList.add('transparent-body');

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);



          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }*/
	/*
	* Esta função foi usada unicamente para poder usar a câmera da webcam direto no
	* ionic serve, sem a necessidade de compilar.
	* Quando for compilar, comente esta função e use a função acima
	* Está usando o inistacan, escrita por Chris Schmich (https://github.com/schmich/instascan)
	*/
  scan(){
    var painho = this;
    let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
      scanner.addListener('scan', function (content) {
        painho.url = content;
        painho.save();
      });
      Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });
  }

  save(){
    var postData = JSON.stringify({
      url: this.url
    });
	//Extrair informações da NFCe
    this.http.post( "https://velhobit.com.br/shoppingrecife/dados/extrair.php", postData,{withCredentials: true}).subscribe(data => {
      this.data.response = data["_body"];

      console.warn(this.url);
      console.warn(this.data.response);
      var retorno = JSON.parse(this.data.response);

     

      if(retorno.erro){
          const alert = this.alertCtrl.create({
            title: 'Houve um prorblema',
            subTitle: retorno.erro,
            buttons: ['OK']
          });
          alert.present();
      }else{
        
      }
      var pontor = "Você ganhou " + retorno.pontos + "!";
      var imagem = "../../assets/imgs/" + retorno.pontos + "P.jpg"
      let retornoModal = this.modalCtrl.create(RetornoNotaPage, { mensagem: retorno.mensagem, pontos: pontor, img: imagem });
      retornoModal.present();

      var painho = this;
      setTimeout(function(){
        painho.navCtrl.pop();
      },3000);
      
      return true;
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
