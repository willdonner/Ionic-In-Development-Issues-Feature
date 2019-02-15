import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesMoviesPage } from './pages-movies';

@NgModule({
  declarations: [
    PagesMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesMoviesPage),
  ],
})
export class PagesMoviesPageModule {}
