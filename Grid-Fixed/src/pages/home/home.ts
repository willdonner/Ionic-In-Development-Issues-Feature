import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'
// declare let jQuery: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    // requires jquery library
    $(document).ready(function() {
      $(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');   
});

    var data = [
      {
                "Dat": 1,
                "Credit": 1,
                "Debit": 1,
                "RunningBalance": 1,
                "Curr": 1,
                "TransType": 1,
                "Account": 1,
                "Branch": 1,
                "Remarks": 1,
                "Ref": 1,
                "Code": 1
      },
      {
                "Dat": 2,
                "Credit": 2,
                "Debit": 2,
                "RunningBalance": 2,
                "Curr": 2,
                "TransType": 2,
                "Account": 2,
                "Branch": 2,
                "Remarks": 2,
                "Ref": 2,
                "Code": 2
      },
      {
                "Dat": 3,
                "Credit": 3,
                "Debit": 3,
                "RunningBalance": 3,
                "Curr": 3,
                "TransType": 3,
                "Account": 3,
                "Branch": 3,
                "Remarks": 3,
                "Ref": 3,
                "Code": 3
      },
      {
                "Dat": 4,
                "Credit": 4,
                "Debit": 4,
                "RunningBalance": 4,
                "Curr": 4,
                "TransType": 4,
                "Account": 4,
                "Branch": 4,
                "Remarks": 4,
                "Ref": 4,
                "Code": 4
      },
      {
                "Dat": 5,
                "Credit": 5,
                "Debit": 5,
                "RunningBalance": 5,
                "Curr": 5,
                "TransType": 5,
                "Account": 5,
                "Branch": 5,
                "Remarks": 5,
                "Ref": 5,
                "Code": 5
      },
      {
                "Dat": 6,
                "Credit": 6,
                "Debit": 6,
                "RunningBalance": 6,
                "Curr": 6,
                "TransType": 6,
                "Account": 6,
                "Branch": 6,
                "Remarks": 6,
                "Ref": 6,
                "Code": 6
      },
      {
                "Dat": 7,
                "Credit": 7,
                "Debit": 7,
                "RunningBalance": 7,
                "Curr": 7,
                "TransType": 7,
                "Account": 7,
                "Branch": 7,
                "Remarks": 7,
                "Ref": 7,
                "Code": 7
      },
      {
                "Dat": 8,
                "Credit": 8,
                "Debit": 8,
                "RunningBalance": 8,
                "Curr": 8,
                "TransType": 8,
                "Account": 8,
                "Branch": 8,
                "Remarks": 8,
                "Ref": 8,
                "Code": 8
      }
    ]
    // 输出结果
    // console.log(JSON.stringify(data, null, 20))
    console.log(data);
    this.data = data;
  }
}
