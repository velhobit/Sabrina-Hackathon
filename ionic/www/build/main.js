webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-card>\n        <img src="../../assets/imgs/teste.jpg"/>\n        <ion-card-content>\n          <ion-card-title>\n            Rodrigo Portillo\n          </ion-card-title>\n          <ion-item>\n              <ion-icon name="medal"></ion-icon>\n              Pontos\n              <ion-badge item-end>1.500</ion-badge>\n            </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-content>\n          <ion-item>\n              <ion-icon name="alarm"></ion-icon>\n              <ion-badge item-end color="secondary">Fez sua Primeira Compra</ion-badge>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-content>\n            <ion-item>\n                <ion-icon name="heart"></ion-icon>\n                <ion-badge item-end color="secondary">Entrou para o Clube de Vantagens</ion-badge>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-content class="compartilhe">\n              <ion-label>Compartilhe com seus amigos e ganhe mais vantagens!</ion-label>\n              <ion-input type="text" value="DAAX2123"></ion-input>\n              <ion-item>\n                  <ion-icon name="logo-twitter"></ion-icon>\n                  <ion-icon name="logo-facebook"></ion-icon>\n                  <ion-icon name="logo-whatsapp"></ion-icon>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__retorno_nota_retorno_nota__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner'


/**
 * Generated class for the QrScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrScanPage = /** @class */ (function () {
    function QrScanPage(navCtrl, navParams, 
        // private qrScanner: QRScanner,
        http, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "";
        this.data = {};
    }
    QrScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QrScanPage');
        this.scan();
        //this.save();
    };
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
    QrScanPage.prototype.scan = function () {
        var painho = this;
        var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
        scanner.addListener('scan', function (content) {
            painho.url = content;
            painho.save();
        });
        Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
                scanner.start(cameras[0]);
                setTimeout(function () {
                    painho.url = "http://nfce.sefaz.pe.gov.br/nfce-web/consultarNFCe?chNFe=26180710798601000730650010000129011686082829&nVersao=100&tpAmb=1&dhEmi=323031382D30372D30375432313A30343A35342D30333A3030&vNF=49.00&vICMS=0.00&digVal=526D4745702F3450794C4F66555A4C71334C646444784F523057553D&cIdToken=000002&cHashQRCode=7CB01A219967B9BE468530D0316A0FBB23B62AEC";
                    scanner.stop();
                    painho.save();
                    return false;
                }, 4000);
            }
            else {
                console.error('No cameras found.');
            }
        }).catch(function (e) {
            console.error(e);
        });
    };
    QrScanPage.prototype.save = function () {
        var _this = this;
        var postData = JSON.stringify({
            url: this.url
        });
        this.http.post("https://velhobit.com.br/shoppingrecife/dados/extrair.php", postData, { withCredentials: true }).subscribe(function (data) {
            _this.data.response = data["_body"];
            console.warn(_this.url);
            console.warn(_this.data.response);
            var retorno = JSON.parse(_this.data.response);
            if (retorno.erro) {
                var alert = _this.alertCtrl.create({
                    title: 'Houve um prorblema',
                    subTitle: retorno.erro,
                    buttons: ['OK']
                });
                alert.present();
            }
            else {
            }
            var pontor = "Você ganhou " + retorno.pontos + "!";
            var imagem = "../../assets/imgs/" + retorno.pontos + "P.jpg";
            var retornoModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__retorno_nota_retorno_nota__["a" /* RetornoNotaPage */], { mensagem: retorno.mensagem, pontos: pontor, img: imagem });
            retornoModal.present();
            var painho = _this;
            setTimeout(function () {
                painho.navCtrl.pop();
            }, 3000);
            return true;
            //this.data.response = data["_body"];
        }, function (error) {
            //Erro ao ao acessar fonte de dados
            var alert = _this.alertCtrl.create({
                title: 'Problemas na conexão',
                subTitle: "Não é possível conectar à fonte de dados.",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    QrScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qr-scan',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\qr-scan\qr-scan.html"*/'<!--\n  Generated template for the QrScanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>QRScan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <video id="preview"></video>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\qr-scan\qr-scan.html"*/,
        })
        /**
         * QRCode está sendo usado de HTML5 para exibição no pitch
         * Ao colocacr em app, utilizar a versão compilada
         */
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && _f || Object])
    ], QrScanPage);
    return QrScanPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=qr-scan.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		278,
		3
	],
	"../pages/profile/profile.module": [
		279,
		2
	],
	"../pages/qr-scan/qr-scan.module": [
		280,
		1
	],
	"../pages/retorno-nota/retorno-nota.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\tabs\tabs.html"*/'<ion-tabs  color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sabrina" tabIcon="chatboxes"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Vantagens" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Estacionamento" tabIcon="car"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Buscar" tabIcon="search"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.conversation = [];
        this.chat = "";
    }
    AboutPage.prototype.enviarMensagem = function () {
        var _this = this;
        var postData = JSON.stringify({
            texto: this.chat
        });
        this.conversation.push({ class: "me", text: this.chat });
        this.chat = "";
        this.http.post("https://velhobit.com.br/shoppingrecife/dados/watson.php", postData, { withCredentials: true }).subscribe(function (data) {
            _this.data.response = data["_body"];
            var retorno = JSON.parse(_this.data.response);
            console.warn(retorno);
            if (retorno.output.text && retorno.output.text != "") {
                console.warn(retorno.output.text);
                var i = Math.floor((Math.random() * retorno.output.text.length) + 1) - 1;
                _this.conversation.push({ class: "sabrina", text: retorno.output.text[i] });
                return true;
            }
            else {
                _this.conversation.push({ class: "sabrina", text: "Desculpa, eu não entendi o que você disse. Pode repetir?" });
                return false;
            }
            //this.data.response = data["_body"];
        }, function (error) {
            //Erro ao ao acessar fonte de dados
            var alert = _this.alertCtrl.create({
                title: 'Problemas na conexão',
                subTitle: "Não é possível conectar à fonte de dados.",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Fale com a Sabrina\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="chat" padding>\n    <ion-item *ngFor="let data of conversation" class="{{data.class}}">\n      <p>{{data.text}}</p>\n    </ion-item>\n  </ion-list>\n  <form padding>\n    <div class="chat_input">\n        <ion-input type="text" [(ngModel)]="chat" name="chat" placeholder="Digite alguma coisa"></ion-input>\n        <button color="facebluk" large (click)="enviarMensagem()"><ion-icon name="text" large></ion-icon></button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qr_scan_qr_scan__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__retorno_nota_retorno_nota__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.campanhas = [];
        this.data = {};
        this.cards = [];
        this.id_card = 0;
    }
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToQR = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__qr_scan_qr_scan__["a" /* QrScanPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadCard();
        var painho = this;
        setInterval(function () {
            painho.loadPromo();
        }, 10000);
    };
    HomePage.prototype.loadCard = function () {
        var _this = this;
        //Dados da Busca
        var postData = JSON.stringify({});
        //Loader
        var loader = this.loadingCtrl.create({
            content: "Carregando Novidades"
        });
        loader.present();
        //Conectar
        this.http.post("https://velhobit.com.br/shoppingrecife/dados/postcards.php", postData, { withCredentials: true }).subscribe(function (data) {
            _this.data.response = data["_body"];
            var retorno = JSON.parse(_this.data.response);
            console.log(retorno);
            //Carregar cards
            _this.cards = retorno;
            loader.dismiss(); //Retirar Loader
            if (retorno.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Erro',
                    subTitle: retorno.error,
                    buttons: ['Entendi']
                });
                alert_1.present();
            }
        }, function (error) {
            //Erro ao ao acessar fonte de dados
            var alert = _this.alertCtrl.create({
                title: 'Problemas na conexão',
                subTitle: "Não é possível conectar à fonte de dados.",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    HomePage.prototype.loadPromo = function () {
        var _this = this;
        //Dados da Busca
        var postData = JSON.stringify({});
        //Loader
        var loader = this.loadingCtrl.create({
            content: "Carregando Novidades"
        });
        // loader.present();
        //Conectars
        this.http.post("https://velhobit.com.br/shoppingrecife/dados/cap_campanha.php", postData, { withCredentials: true }).subscribe(function (data) {
            _this.data.response = data["_body"];
            var retorno = JSON.parse(_this.data.response);
            console.log(retorno);
            for (var i = 0; i < retorno.length; i++) {
                var item = retorno[i];
                if (!_this.campanhas.includes(item.id)) {
                    if (parseInt(item.tipo) == 1) {
                        //Carregar card
                        _this.cards.unshift(item);
                        console.log(_this.cards);
                    }
                    else {
                        var retornoModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__retorno_nota_retorno_nota__["a" /* RetornoNotaPage */], { mensagem: item.conteudo, pontos: item.titulo, img: item.img_url });
                        retornoModal.present();
                    }
                    _this.campanhas.push(item.id);
                }
            }
            // loader.dismiss(); //Retirar Loader
            if (retorno.error) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Erro',
                    subTitle: retorno.error,
                    buttons: ['Entendi']
                });
                // alert.present();
            }
        }, function (error) {
            //Erro ao ao acessar fonte de dados
            var alert = _this.alertCtrl.create({
                title: 'Problemas na conexão',
                subTitle: "Não é possível conectar à fonte de dados.",
                buttons: ['OK']
            });
            // alert.present();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      <img src="../../assets/imgs/shopping-logo.png" class="logo"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let data of cards" id="{{data.id}}">\n    <img src="{{data.img_url}}">\n    <ion-card-content>\n      <ion-card-title>\n        {{data.titulo}}\n      </ion-card-title>\n      <p>\n        {{data.conteudo}}\n      </p>\n      <p>\n        <span class="tag">{{data.category_name}}</span>\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab bottom right>\n      <button ion-fab (click)="goToQR()"><ion-icon name="qr-scanner"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_qr_scan_qr_scan__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_qr_scanner__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_retorno_nota_retorno_nota__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_qr_scan_qr_scan__["a" /* QrScanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_retorno_nota_retorno_nota__["a" /* RetornoNotaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qr-scan/qr-scan.module#QrScanPageModule', name: 'QrScanPage', segment: 'qr-scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/retorno-nota/retorno-nota.module#RetornoNotaPageModule', name: 'RetornoNotaPage', segment: 'retorno-nota', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_qr_scan_qr_scan__["a" /* QrScanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_retorno_nota_retorno_nota__["a" /* RetornoNotaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, alertCtrl, fb, loadingCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.data = {};
        this.enterprise = "";
        this.username = "";
        this.password = "";
        this.remember = true;
        this.http = http;
        //Logar automaticamente se lembrado
        if (localStorage.saemp_user != undefined) {
            this.username = localStorage.saemp_user;
            this.password = localStorage.saemp_pass;
            this.enterprise = localStorage.saemp_enterprise;
            // this.saempLogin();
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /**
     * Entrar no Saemp
     */
    LoginPage.prototype.saempLogin = function () {
        var _this = this;
        var message = "";
        if (this.enterprise.trim() === "") {
            message += "preencha o identificador (alias) da empresa;<br/>";
        }
        if (this.username.trim() === "") {
            message += "preencha seu nome de usuário;<br/>";
        }
        if (this.password.trim() === "") {
            message += "preencha sua senha;";
        }
        if (message != "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Ooops!',
                subTitle: "<p>Por favor:</p>" + message,
                buttons: ['Entendi']
            });
            alert_1.present();
        }
        else {
            this.data.user = this.username.trim();
            this.data.pass = this.password.trim();
            this.data.enterprise = this.enterprise.trim();
            //Logar
            var postData = JSON.stringify({
                user: this.data.user,
                pass: this.data.pass,
                enterprise: this.data.enterprise
            });
            this.http.post("login.php", postData, { withCredentials: true }).subscribe(function (data) {
                _this.data.response = data["_body"];
                var retorno = JSON.parse(_this.data.response);
                console.log(retorno);
                if (retorno.error != undefined) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Erro',
                        subTitle: retorno.error,
                        buttons: ['Entendi']
                    });
                    alert_2.present();
                }
                else {
                    if (_this.remember) {
                        //Antes do lançamento, ajuste para que seja um TOKEN e não salvar a senha no localStorage
                        localStorage.saemp_user = _this.data.user;
                        localStorage.saemp_pass = _this.data.pass;
                        localStorage.saemp_enterprise = _this.data.enterprise;
                    }
                    else {
                        localStorage.removeItem('saemp_user');
                        localStorage.removeItem('saemp_pass');
                        localStorage.removeItem('saemp_enterprise');
                    }
                    localStorage.saemp_user_id = retorno.user_id;
                }
                //this.data.response = data["_body"];
            }, function (error) {
                //Erro ao ao acessar fonte de dados
                var alert = _this.alertCtrl.create({
                    title: 'Problemas na conexão',
                    subTitle: "Não é possível conectar à fonte de dados.",
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    /*
    * Usar apenas em compilação
    */
    LoginPage.prototype.loginAction = function () {
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
    };
    /**
     * For tests only
     */
    LoginPage.prototype.fakeFacebookLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Sincronizando...",
            duration: 2000
        });
        loader.present();
        var alert = this.alertCtrl.create({
            title: 'Olá Rodrigo!',
            subTitle: 'Bem-vindo de volta ao Shopping Recife!',
            buttons: ['OK']
        });
        setTimeout(function () {
            alert.present();
            //this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
        }, 500);
        localStorage.first_name = "Rodrigo";
        localStorage.full_name = "Rodrigo Portillo";
        localStorage.bith_day = "1985-01-30";
        localStorage.token = "ZYX";
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <img src="../../assets/imgs/estacionamento.jpg"/>\n  <form padding>\n    <ion-list>\n      <ion-item>\n        <ion-label floating color="primary">Nome de Usuário</ion-label>\n        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color="primary">Senha</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block large (click)="saempLogin()" type="submit" block padding>Acessar o Sistema</button>\n  </form>\n  <div padding>\n  <button ion-button block large (click)="fakeFacebookLogin()" color="facebluek"><ion-icon name="logo-facebook" large></ion-icon> <ion-label>Entrar com o Facebook</ion-label></button>\n  <button ion-button block color="lightgrey">Termos e Condições</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetornoNotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RetornoNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RetornoNotaPage = /** @class */ (function () {
    function RetornoNotaPage(navCtrl, params, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.mensagem = "";
        this.img = "";
        this.mensagem = params.get('mensagem');
        this.pontos = params.get('pontos');
        this.img = params.get('img');
    }
    RetornoNotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RetornoNotaPage');
        var toast = this.toastCtrl.create({
            message: this.mensagem,
            position: "bottom",
            duration: 10000
        });
        toast.present();
    };
    RetornoNotaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RetornoNotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-retorno-nota',template:/*ion-inline-start:"C:\ionic3\ShoppingRecife\src\pages\retorno-nota\retorno-nota.html"*/'<!--\n  Generated template for the RetornoNotaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Fechar</button>\n    </ion-buttons>\n    <ion-title>{{pontos}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <img src="{{img}}">\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\ShoppingRecife\src\pages\retorno-nota\retorno-nota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], RetornoNotaPage);
    return RetornoNotaPage;
}());

//# sourceMappingURL=retorno-nota.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map