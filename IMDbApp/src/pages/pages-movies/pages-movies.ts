import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll} from 'ionic-angular';
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

  myInfiniteScroll: InfiniteScroll;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  res: any;
  isRefreshing: any;
  listpage: any = 1;
  results:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ServicesMovieProvider:ServicesMovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesMoviesPage');
    this.listpage = 1;
  }

  searchChanged(){
    this.ServicesMovieProvider.searchData(this.searchTerm, this.type, this.listpage)
        .subscribe(
          res => {
            console.log("res");
            console.log(res);
            this.res = res;
            this.results = res.Search;
          }
        )
  }
  viewdetail(item){
    console.log(item)
    this.navCtrl.push('lookMeetingFeedbacks',{item:item});
  }

  /**
     * 滚动刷新
     */
    doInfinite(infiniteScroll: InfiniteScroll) {
      // if (!this.needScrollRefresh) {
      //     this.myInfiniteScroll.complete();
      //     this.needScrollRefresh = true;
      //     return;
      // }
      setTimeout(() => {
      this.myInfiniteScroll = infiniteScroll;
      // if (this.res.totalResults.length < AppConfig.listPageSize) {
      //     this.myInfiniteScroll.complete();
      //     this.myInfiniteScroll.enable(false);
      //     return;
      // }
      this.isRefreshing = true;
      this.listpage = this.listpage + 1;
      this.searchChanged();
  },1000)
  }
}
