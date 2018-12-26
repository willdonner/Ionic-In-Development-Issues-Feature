import { Component,OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage implements OnInit{

  
  
  timer1:any;
  progress:any;
  load:any;
  constructor(private transfer: FileTransfer,
    private file: File,private fileOpener: FileOpener) {

  }
  ngOnInit() {
    this.progress=0;
    this.load=0
  }
  
  
  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://yuntu88.oss-cn-beijing.aliyuncs.com/fromlocal/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-10-18%20%E4%B8%8B%E5%8D%885.43.16.png';
    fileTransfer.onProgress(progressEvent => {
      console.log(progressEvent.lengthComputable); 
      console.log(progressEvent.loaded);
      console.log(progressEvent.lengthComputable);
      if (progressEvent.lengthComputable) {
        // 下载过程会一直打印，完成的时候会显示 1
        console.log('progressEvent');
        this.progress = Math.round((progressEvent.loaded / progressEvent.total)*100);
        console.log(this.progress);
      } else {
        console.log('下载失败')
      }
    });
    this.timer1 = setInterval(() => {

      this.load =this.progress;

      if(this.progress>99){
        clearInterval(this.timer1)
      }

    }, 300);
    fileTransfer.download(url, this.file.dataDirectory + 'cat1.png').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
  this.fileOpener.open(entry.toURL(), this.getFileMimeType("png"))
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
