import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any = {};
  enterprise:string = "";
  username:string = "";
  password:string = "";

  remember:boolean = true;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public fb: Facebook,
    public loadingCtrl: LoadingController,
    public appCtrl: App
    ) {

    this.http = http;

    //Logar automaticamente se lembrado
    if(localStorage.saemp_user != undefined){
      this.username = localStorage.saemp_user;
      this.password = localStorage.saemp_pass;
      this.enterprise = localStorage.saemp_enterprise;

     // this.saempLogin();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  /**
   * Entrar no Saemp
   */
  saempLogin() {
    var message:string = "";
    if(this.enterprise.trim() === ""){
      message += "preencha o identificador (alias) da empresa;<br/>";
    }
    if(this.username.trim() === ""){
      message += "preencha seu nome de usuário;<br/>";
    }
    if(this.password.trim() === ""){
      message += "preencha sua senha;";
    }

    if(message != ""){
      const alert = this.alertCtrl.create({
        title: 'Ooops!',
        subTitle: "<p>Por favor:</p>" + message,
        buttons: ['Entendi']
      });
      alert.present();
    }else{

      this.data.user = this.username.trim();
      this.data.pass = this.password.trim();
      this.data.enterprise = this.enterprise.trim();

      //Logar
      var postData = JSON.stringify({
        user: this.data.user,
        pass: this.data.pass,
        enterprise: this.data.enterprise
      });

      this.http.post( "login.php", postData,{withCredentials: true}).subscribe(data => {
        this.data.response = data["_body"];
        var retorno = JSON.parse(this.data.response);
        console.log(retorno);
        if(retorno.error != undefined){
          const alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: retorno.error,
            buttons: ['Entendi']
          });
          alert.present();
        }else{
          if(this.remember){
            //Antes do lançamento, ajuste para que seja um TOKEN e não salvar a senha no localStorage
            localStorage.saemp_user = this.data.user;
            localStorage.saemp_pass = this.data.pass;
            localStorage.saemp_enterprise = this.data.enterprise;
          }else{
            localStorage.removeItem('saemp_user');
            localStorage.removeItem('saemp_pass');
            localStorage.removeItem('saemp_enterprise');
          }
          localStorage.saemp_user_id = retorno.user_id;
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

/*
* Usar apenas em compilação
*/
loginAction()
{
    // Login with permissions
   /*
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    .then( (res: FacebookLoginResponse) => {

        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            var fb_id = res.authResponse.userID;
            var fb_token = res.authResponse.accessToken;

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

                // Get the connected user details
                var gender    = user.gender;
                var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                console.log("Gender : " + gender);
                console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });
    */
  }

  /**
   * For tests only
   */
  fakeFacebookLogin(){
    const loader = this.loadingCtrl.create({
      content: "Sincronizando...",
      duration: 2000
    });
    loader.present();

    const alert = this.alertCtrl.create({
      title: 'Olá Rodrigo!',
      subTitle: 'Bem-vindo de volta ao Shopping Recife!',
      buttons: ['OK']
    });
    setTimeout(() =>{
     alert.present();
     //this.navCtrl.pop();

     this.navCtrl.setRoot(ProfilePage);
    },500);

    localStorage.first_name = "Rodrigo";
    localStorage.full_name = "Rodrigo Portillo";
    localStorage.bith_day = "1985-01-30";
    localStorage.token = "ZYX";
  }

}
