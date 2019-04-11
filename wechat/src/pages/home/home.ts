import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Wechat} from '@ionic-native/wechat/ngx';
declare var Wechat: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pay_test(){
    var params = {
      // partnerid: '10000100', // merchant id
      // prepayid: 'wx201411101639507cbf6ffd8b0779950874', // prepay id
      // noncestr: '1add1a30ac87aa2db72f57a2375d8fec', // nonce
      // timestamp: '1439531364', // timestamp
      // sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
      appId: "wx04eecab8a1d05d39",
    appSecret: "f9473586fa8a110bfe71a1b82c2bcbe7",
    partnerId: "1227340101",
    partnerKey: "153f0a60728ce192d20ba4a81b58f5e3",
    paySignKey: "rzwiN0RmWCCBpbthDioPl9ljj9LTLSOKdGK3nSJAoVFfNzt4EjHuUsdoovWaGw6Tl551KnoQa8Q9OHIsBCmNodgFMmHD9uNXgrCdm3IEWAbgkvH9QJHup4xvpVWBK9FJ"
  };
  
  Wechat.sendPaymentRequest(params, function () {
      alert("Success");
  }, function (reason) {
      alert("Failed: " + reason);
  });
  }

  ionic_wechat(){
    
    console.log('wechat')
    Wechat.isInstalled(function (installed) {
      alert("Wechat installed: " + (installed ? "Yes" : "No"));
  }, function (reason) {
      alert("Failed: " + reason);
  });
  //   this.wechat.isInstalled()
  // .then((res: any) => console.log(res))
  // .catch((error: any) => console.error(error));
    // this.wechat.share('Hello')
    // .then((res: any) => console.log(res))
    // .catch((error: any) => console.error(error));
    }
  //   Cordova.Plugin.wechat.share('Hello')
  // .then((res: any) => console.log(res))
  // .catch((error: any) => console.error(error));
  }


