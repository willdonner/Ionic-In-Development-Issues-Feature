import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  information: any[];

  // item:any;
  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('assets/information.json').map(res => res.json().data);
    localData.subscribe(data => {
      this.information = data.gpList;
      console.log(this.information);
    })
  } 
  ionViewDidEnter(){
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    console.log(this.information[i].userList[j].userList);
    this.information[i].userList[j].open = !this.information[i].userList[j].open;
  }
  buyItem(value) {
    console.log("value: ", value);
    alert("name " + value.name + ". phone: " + value.mobile);
  }
}