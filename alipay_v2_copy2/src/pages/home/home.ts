import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare let cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
    
  }
  pay(){
    // let payInfo = "app_id=2019040963840121&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22IQJZSRC1YMQB5HU%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fdomain.merchant.com%2Fpayment_notify&sign_type=RSA&timestamp=2019-03-25%2020%3A26%3A31&version=1.0&sign=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkqJKl9tNglLJDzwXTLcX7V5DpeV3ljUgz7u69gDNDMutFrJziswSArVkfpSrPL0w6kU/BbYXm+KsBUg+SLOEiGplo5DiRm5orss0R8uWUXAZWRoJyLbHMG6emW3gMYiDIWJSISHOAM+fUfTEKC2BiMuQ3R3m5FwXfxnFcF4P/ImiR3XNhFqTUGPN2TltS9cOg+G2FGfWQwOZ7GlkdhqvVCwTpYW/MiAVqLLljiFUYqtzkTaDmWqbIYQfTmXC3iHTDCMWe21zdTvbTzIUszNHpVdwcg5KKl3NiKAQIdcwSDCy4XY3ixUT7Uu4YbFN7l8GUJXrzsWj1hhanq1FDkXS1wIDAQAB";
    console.log('alipay');
    let payInfo = 'alipay_sdk=alipay-sdk-java-dynamicVersionNo&app_id=2014100900013222&biz_content=%7B%22body%22%3A%22aaa%22%2C%22out_trade_no%22%3A%2220180426092942%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22APP%E6%94%AF%E4%BB%98%E6%B5%8B%E8%AF%95%22%2C%22total_amount%22%3A%220.01%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&sign=hLISGhcsUK%2FblfGEk3CU2fDF5pIF6s6%2Bsmz6Yl0IO1o%2FD56Kt37oVtO4YGpPoLVqN0M8RfDt2%2BEBdcGeWwiVPqNoLBxKzzvOYU7TjZbxErAZuQXX8kftMGEBsi7fHlWuNmgNc6wScOrE9HobK6ZP8mq2UR5s2or3u6VVtJJgN3E%3D&sign_type=RSA&timestamp=2018-04-26+09%3A29%3A42&version=1.0'
    cordova.plugins.alipay.payment(payInfo, (res) => {
      // 支付成功
      console.log('ok');
      console.log(res);
      alert(res);
    }, (error) => {
      // 支付失败
      console.log("支付失败" + error.resultStatus);
      console.log(error);
      alert(error.resultStatus);
    });
  }

}
