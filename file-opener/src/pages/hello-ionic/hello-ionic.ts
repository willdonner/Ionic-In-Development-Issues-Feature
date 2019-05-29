import { Component,OnInit } from '@angular/core';
// import { FileOpener } from '@ionic-native/file-opener';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
declare let cordova: any;
declare let plugins: any;

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage implements OnInit{
  docUri = "";
  fileSelected = 0
  
  timer1:any;
  progress:any;
  load:any;
  constructor(private camera: Camera, private imagePicker: ImagePicker, private filePicker: IOSFilePicker,private transfer: FileTransfer,
    private file: File) {

  }
  ngOnInit() {
    this.progress=0;
    this.load=0
  }


  progressview(){
    alert('view');
    cordova.ProgressIndicator.showSimple(true);
    cordova.ProgressIndicator.showBar(false, 100000);
    // plugins.progress.show("Loading...");
  }
  takephoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    alert('ios')
    this.camera.getPicture(options).then((imageData) => {
      alert(imageData);
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err);
     // Handle error
    });
  }
  
  chooseimage(){
    alert("ios2");
    // let options: ImagePickerOptions = {
    //   maximumImagesCount: 6,
    //   width: 800
    // };
    
  //   cordova.imagePicker.getPictures(
  //     function(results) {
  //         for (var i = 0; i < results.length; i++) {
  //             console.log('Image URI: ' + results[i]);
  //         }
  //     }, function (error) {
  //         console.log('Error: ' + error);
  //     }
  // );



    
    // let options = {
    //   maximumImagesCount: 3,
    //   width: 800
    // }
    (<any>window).imagePicker.getPictures(
      function(results) {
          for (var i = 0; i < results.length; i++) {
              console.log('Image URI: ' + results[i]);
              alert(results(i));
          }
      }, function (error) {
          console.log('Error: ' + error);
          alert(error);
      }
  );
    }

  chooseFileIOS() {
    var hh = this;
    (<any>window).FilePicker.isAvailable(function (avail) {
      if (avail) {
        alert('yes');
        var utis = ["public.data"];
        (<any>window).FilePicker.pickFile(res => {
          alert(res);
          hh.docUri = res;
          alert(hh.docUri);
          hh.fileSelected = 1;
        })
      }
    });
  }
  // open(){
  //   FilePicker.isAvailable(function (avail) {
  //     alert(avail ? "YES" : "NO");
  //   });
  //   console.log('open');
  //   this.filePicker.pickFile()
  // .then(uri => console.log(uri))
  // .catch(err => console.log('Error', err));
  // }

  downloadpdf() {
    console.log('download_pdf')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://49.4.54.96/file/download/10,0205ffaa3ed9';
    fileTransfer.onProgress(progressEvent => {
      console.log(progressEvent);
      console.log(progressEvent.lengthComputable); 
      console.log(progressEvent.loaded);
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
      console.log(this.load);
      if(this.progress>99){
        clearInterval(this.timer1)
      }

    }, 300);
    fileTransfer.download(url, this.file.dataDirectory + 'willd.pdf').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
      cordova.plugins.fileOpener2.open(entry.toURL(), this.getFileMimeType("pdf"))
    }, (error) => {
      // handle error
    });
  }
  downloaddoc() {
    console.log('download_doc')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://upload.willdonner.top/upload/WiFi_Uncle/testwildlonner.doc';
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
    fileTransfer.download(url, this.file.dataDirectory + 'willd.doc').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
      cordova.plugins.fileOpener2.open(entry.toURL(), this.getFileMimeType("doc"))
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
  downloadpic() {
    console.log('download_pic')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://upload.willdonner.top/upload/WiFi_Uncle/p2430486605.jpg';
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
    fileTransfer.download(url, this.file.dataDirectory + 'willd.jpg').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
      cordova.plugins.fileOpener2.open(entry.toURL(), this.getFileMimeType("jpg"))
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
  downloadtxt() {
    console.log('download_txt')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://upload.willdonner.top/upload/WiFi_Uncle/emma.txt';
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
    fileTransfer.download(url, this.file.dataDirectory + 'willd.txt').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
      cordova.plugins.fileOpener2.open(entry.toURL(), this.getFileMimeType("txt"))
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
  downloadxls() {
    console.log('download_xls')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://upload.willdonner.top/upload/WiFi_Uncle/willdonner.xlsx';
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
    fileTransfer.download(url, this.file.dataDirectory + 'willd.xlsx').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
      cordova.plugins.fileOpener2.open(entry.toURL(), this.getFileMimeType("xlsx"))
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
  downloadppt() {
    console.log('download_ppt')
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://upload.willdonner.top/upload/WiFi_Uncle/ppp.ppt';
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
    fileTransfer.download(url, this.file.dataDirectory + 'willd.ppt').then((entry) => {
      
      console.log('download complete: ' + entry.toURL());
      cordova.plugins.fileOpener2.open(entry.toURL(), this.getFileMimeType("ppt"))
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
