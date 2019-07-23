/**
 * Created by Hamlet on 2018-12-17.
 */
import { Component, Injector, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { AbstractComponent } from 'src/interfaces/abstract-component';
import { AppConfig } from 'src/app/app.config';
import { ParamMap } from '@angular/router';
import { EventsConfigs } from 'src/app/configs/event.config';
import { Camera } from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';

declare var WebRTCAPI: any;

@Component({
    selector: 'app-drug',
    templateUrl: 'drug.html',
    styleUrls: ['drug.scss'],
    providers: [Camera]
})
export class Drug extends AbstractComponent implements OnInit, OnDestroy {
    placeholder = 'assets/images/dugon.jpg';
    chosenPicture: any;
    items = [
    ];
    devices = [];
    // element: HTMLVideoElement; 
    constructor(protected injector: Injector, protected cdr: ChangeDetectorRef, private cam: Camera, public alertCtrl: AlertController) {
        super(cdr, injector);
    }

    /**
     * 初始化
     */
    ngOnInit(): void {
        // const videoDiv = document.createElement('div');
        // const videoDiv1 = document.createElement('div');
        // videoDiv.innerHTML = '<video id=' + 'screenVideo' + ' autoplay '  + ' playsinline ></video>';
        // videoDiv1.innerHTML = '<video id=' + 'remoteVideo' + ' autoplay '  + ' playsinline ></video>';
        // const video: HTMLVideoElement = <HTMLVideoElement>document.getElementById('screenVideo');
        // this.element = document.createElement('video');
        if (AppConfig.debug)
            console.log('初始化:app-page-three');

        console.log(this.routeData.storage);
        console.log(this.curUser);

        this.route.queryParamMap.subscribe(
            (params: ParamMap) => {
                console.log(params.get('id'));
                console.log(params.get('name'));
            }
        );
 
    }

      pharmacist(): void {
        
       
        
        WebRTCAPI.fn.detectRTC({
            screenshare : false
        }, function(info) {
            alert('支持');
            console.log(info);
        if (!info.support ) {
            alert('不支持WebRTC');
        }
    });
    function gotStream( opt , succ) {
        console.log('3333');
    
        RTC.getLocalStream({
            video: true,
            audio: true,
            needRetry: true,
            
            videoDevice: opt.videoDevice,
            // 如需指定分辨率，可以在attributes中增加对width和height的约束
            // 否则将获取摄像头的默认分辨率
            // 更多配置项 请参考 接口API
            // https://cloud.tencent.com/document/product/647/17251#webrtcapi.getlocalstream
            attributes: {
                width: 640,
                height: 320
            }
        }, function(info) {
            console.log('1111');
            const stream = info.stream;
            
            const screenVideo = document.getElementById('screenVideo') as HTMLVideoElement;
            screenVideo.srcObject = stream;
            console.log('2222');
            succ ( stream );
        });
        // RTC.on( 'onRemoteStreamUpdate' , function( data ) {
        //     alert('1233');
        //     if ( data && data.stream) {
        //         const stream = data.stream;
        //         console.log( data.userId + 'enter this room with unique videoId ' + data.videoId  );
        //         const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
        //         remoteVideo.srcObject = stream;
        //     } else {
        //         console.log( 'somebody enter this room without stream' );
        //     }
        // });
    }
    const RTC = new WebRTCAPI( {
        'userId': 'Web_trtc_01',
        'sdkAppId':  xxxx,
        'userSig': 'xxx',
        'debug': {
            'log': true, // 是否在控制台打印调试日志 ,默认为false
            'vconsole': true, // 是否展示 vconsole （方便在移动端查看日志）
            'uploadLog': true, // 是否上报日志
        }
    }, function () {
        RTC.enterRoom({
            roomid : 999,
            role: 'user'
        }, function (info) {
            console.warn('init succ', info);
            gotStream({
                audio: true,
                video: true
            }, function(stream) {
                RTC.startRTC({
                    stream: stream,
                    role: 'user'
                });
            });
        }, function (error) {
            console.error('init error', error);
        });
        
    });
    RTC.on('onRemoteStreamUpdate', onRemoteStreamUpdate);
    function onRemoteStreamUpdate(info) {
        
        alert('123');
        console.log('willdonner');
        console.log(info);
        // console.debug(info)
        if (info.stream && info.stream.active === true) {
            const id = info.videoId;
            const video = document.getElementById('remoteVideo') as HTMLVideoElement;
            alert(info.stream);
            video.srcObject = info.stream;
        } else {
            console.log('欢迎用户' + info.userId + '加入房间');
        }
    }
      }
    
      
         
    

    /**
     * 非常重要
     * 注销订阅的事件，防止内存泄露
     */
	ngOnDestroy(): void {
		this.events.unsubscribe(EventsConfigs.eventNames.logoutSuccess);
    }
    
    navToSib(): void {
        this.navToSiblingUrl('infinite');
    }

}

