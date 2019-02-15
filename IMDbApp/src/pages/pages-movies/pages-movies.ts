import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServicesMovieProvider,SearchType} from '../../providers/services-movie/services-movie';

/**
 * Generated class for the PagesMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages-movies',
  templateUrl: 'pages-movies.html',
})
export class PagesMoviesPage {
  type: SearchType = SearchType.all;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicesMovieProvider:ServicesMovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesMoviesPage');
    this.ServicesMovieProvider.searchData('car',this.type)
        .subscribe(
          res => {
            console.log("res");
            console.log(res);
          }
        )
  }

}
