import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  hot_code_push(){
    alert('android热更新测试成功👌👌👌👌👌');
    alert('确认服务器实打实的');
    alert("更不高兴🙏")
  }
}
