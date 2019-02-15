import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesMovieProvider} from '../../providers/services-movie/services-movie';
/**
 * Generated class for the PagesMovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'lookMeetingFeedbacks',
    segment: 'lookMeetingFeedbacks',
    priority: 'off'
})
@Component({
  selector: 'page-pages-movie-details',
  templateUrl: 'pages-movie-details.html',
})
export class PagesMovieDetailsPage {
  detailData:any
  information:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicesMovieProvider: ServicesMovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesMovieDetailsPage');
    this.detailData = this.navParams.get('item');
    console.log(this.detailData);
    this.ServicesMovieProvider.searchDetail(this.detailData.imdbID)
        .subscribe(
          res => {
            console.log("res");
            console.log(res)
            this.information = res;
          }
        )
  }
}
