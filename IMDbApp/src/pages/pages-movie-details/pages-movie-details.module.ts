import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesMovieDetailsPage } from './pages-movie-details';

@NgModule({
  declarations: [
    PagesMovieDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesMovieDetailsPage),
  ],
})
export class PagesMovieDetailsPageModule {}
