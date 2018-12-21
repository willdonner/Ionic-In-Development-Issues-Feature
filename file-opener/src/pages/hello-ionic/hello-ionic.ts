import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private fileOpener: FileOpener) {

  }
  download(){
    console.log("download");
    this.fileOpener.open('http://www.fortresearch.com/upload/WiFi_Uncle/test.pdf', 'application/pdf')
  .then(() => console.log('File is openeds'))
  .catch(e => console.log('Error opening files', e));
  }
}
