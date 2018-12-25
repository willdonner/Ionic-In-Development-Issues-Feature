import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private transfer: FileTransfer,
    private file: File,private fileOpener: FileOpener) {

  }
  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://www.fortresearch.com/upload/WiFi_Uncle/cat.jpg';
    fileTransfer.onProgress(progressEvent => {
      if (progressEvent.lengthComputable) {
        // 下载过程会一直打印，完成的时候会显示 1
        console.log('progressEvent');
        console.log(progressEvent.loaded / progressEvent.total);
      } else {
        console.log('下载失败')
      }
    });
    fileTransfer.download(url, this.file.dataDirectory + 'cat.jpg').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
  this.fileOpener.open(entry.toURL(), this.getFileMimeType("jpg"))
  .then(() => {
    console.log('打开成功');
  })
  .catch(() => {
    console.log('打开失败');
  });
    }, (error) => {
      // handle error
    });
  }
  getFileMimeType(fileType: string): string {
    let mimeType: string = '';
  
    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }
}
