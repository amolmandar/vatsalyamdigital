import { VatsalyamYearDataComponent } from './../vatsalyam-year-data/vatsalyam-year-data.component';
import { ContentService } from './../shared/services/content.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { stringify } from '@angular/compiler/src/util';
import { DatabaseService } from '../shared/services/database.service';
import { Observable, of } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import { HostListener } from '@angular/core';
import { ResponsiveService } from '../shared/services/responsive.service';
//import { HostListener } from "@angular/core";
//import { of } from 'rxjs';
import { map ,catchError} from 'rxjs/operators';
import * as fs from 'fs';
import * as path from 'path';
import {HttpClient} from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReadKeyExpr } from '@angular/compiler';
export class SelectData{
  name:string;
  email:string;

}
@Component({
  styleUrls:['./dialog.css'],
  template:`
      <body class="bdy">
                  <video #mediavideo  width="100%" height="60%" controls preload="auto"  
                  class="video" (ended)="endVideo()" 
                  (click)="toogleVideo()" 
                >
                    
                    <source src="{{data.file}}" 
                    type="video/mp4">
                    <source src="assets/videopayal.mp4" 
                    type="video/mp4">
                </video>
                <div class="ftr">
                <footer id="modal-footer">
                  <button mat-raised-button id="modal-action-button" 
                  (click)="toogleVideo()">START</button>
        <button mat-raised-button id="modal-cancel-button" 
        (click)="closeModal()" class="cls">CLOSE</button>
    </footer>
        </div>
        <div class="thanks">
          <div>Thanks for sharing your video</div>
        </div>
</body>         
  `
})
export class MentorDialog {
  @ViewChild('mediavideo') media:ElementRef;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<MentorDialog>
  ) {
     
  }
  closeModal() {
    this.dialogRef.close();
  }
  toogleVideo(){
    let vd:HTMLVideoElement=this.media.nativeElement;
  vd.play();

  }
  errorVideo(evt){
    console.log(evt);

    this.media.nativeElement.source.src="assets/videopayal.mp4";
  }
  endVideo(){}
}
const fileExists = require('file-exists');
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  scrHeight:any;
  scrWidth:any;
  sld:Observable<SelectData[]>;
  page;
  moreOrLess=true;
  //httpClient:HttpClient;
  limit=140;
  lst=new Array(100);
  uList:string;
  nm:string;
  em:string;
  viewMode="2015";
  strr:String;
  resData:JSON[];
  width;
  vOn;
  vSt;
  @ViewChild('media') media:ElementRef;
  @ViewChild('medianeha') medianeha:ElementRef;
  @ViewChild('mediapayal') mediapayal:ElementRef;
  @ViewChild('mediavidya') mediavidya:ElementRef;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log("from page.ts");
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private route: ActivatedRoute,
    private contentService:ContentService,
    private responsiveService:ResponsiveService,
    private httpClient:HttpClient,
    private dialog:MatDialog
    ) { 
      this.getScreenSize();

    }
    videoObject: Array<any> = [{
        file: 'assets/videokide.mp4',
        name:'sayali'
      },{
        file: 'assets/videodhiraj.mp4',
        name:'dhiraj'
      },{
        file: 'assets/videoramesh.mp4',
        name:'ramesh'
      },{
        file: 'assets/videovinod.mp4',
        name:'vinod'
      },{
        file: 'assets/videoprasad.mp4',
        name:'prasad'
      },{
        file: 'assets/videokiran.mp4',
        name:'kiran'
      },{
        file: 'assets/videovinay.mp4',
        name:'vinay'
      },{
        file: 'assets/videomanapure.mp4',
        name:'manapure'
      },{
        file: 'assets/videosarang.mp4',
        name:'sarang'
      },{
        file: 'assets/videoraja.mp4',
        name:'raja'
      },{
        file: 'assets/videosalina.mp4',
        name:'salina'
      },{
        file: 'assets/videonaren.mp4',
        name:'naren'
      },{
        file: 'assets/videosuraj.mp4',
        name:'suraj'
      },{
        file: 'assets/videopradhan.mp4',
        name:'pradhan'
      },{
        file: 'assets/videoniraj.mp4',
        name:'niraj'
      },{
        file: 'assets/videoatul.mp4',
        name:'atul'
      }
    
    ];
name="raju";
videoFile="assets/videopayal.mp4"
fnd=0;
    openDialog(val:string) {
      const dialogConfig = new MatDialogConfig();
      for(let i=0;i< this.videoObject.length;i++){
        if(this.videoObject[i].name===val){
          //if(fileExists(this.videoObject[i].file)){
              
             dialogConfig.data=this.videoObject[i];
              this.fnd=1;
           // };
            //alert("raju");
          break;
      
        }
      }
      if(this.fnd==0){
        dialogConfig.data ={'name':this.name,'file':this.videoFile};
      
      }
      //this.fnd=0;
      //alert(dialogConfig.data);
  
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width="650px"
      dialogConfig.height="550px"
      this.dialog.open(MentorDialog, dialogConfig);
      //console.log("sdsds");
      //console.log(dialogConfig.data.name);
      //console.log(this.name);
  }


    toggleVideo(){
        this.media.nativeElement.play();
        this.vSt=1;
        this.vOn=0;
    }
    pauseVideo(){
      this.media.nativeElement.pause();
    }
    endVideo(){
      this.vOn=1
    }
    toggleVideoNeha(){
      this.medianeha.nativeElement.play();
      this.vSt=1;
      this.vOn=0;
  }
  pauseVideoNeha(){
    this.medianeha.nativeElement.pause();
  }
  endVideoNeha(){
    this.vOn=1
  }
  toggleVideoPayal(){
    this.mediapayal.nativeElement.play();
    this.vSt=1;
    this.vOn=0;
}
pauseVideoPayal(){
  this.mediapayal.nativeElement.pause();
}
endVideoPayal(){
  this.vOn=1
}
toggleVideoVidya(){
  this.mediavidya.nativeElement.play();
  this.vSt=1;
  this.vOn=0;
}
pauseVideoVidya(){
this.mediavidya.nativeElement.pause();
}
endVideoVidya(){
this.vOn=1
}



    getIsM(){
      return this.responsiveService.isM;
    }
    getImgBorder(){
      return `3px double purple`
    }
    getImgBorder1(){
      return `7px double green`
    }
    /* @HostListener('window:beforeunload', ['$event'])
    onWindowClose(event: any): void {
     //localStorage.removeItem('data');
 
      event.preventDefault();
      event.returnValue = false;
 
   } */

  showMoreContents(){
    this.limit = this.page.content[0].length;//Number(this.limit) + 300;
  }
  showLessContents(){
    this.limit = 140;//Number(this.limit) - 300;
  }
  chg(){
    this.moreOrLess=!this.moreOrLess;
    //console.log(this.moreOrLess+ "a"+m);
  }
  sldKeys(sl){
    return Object.keys(sl);
  }
  ngOnInit(): void {  

    const pageData = this.route.snapshot.data['page'];
    //console.log(pageData);
    this.page=this.contentService.pages[pageData];
    //this.strr=pageData.content
  }
  imageObject: Array<object> = [{
    image: 'assets/vat5.jpg',
    thumbImage: 'assets/vat5thumb.jpg',
    alt: 'Vatsalyam ',
    title: 'Sou Mehbooba Khan'
},
{
  image: 'assets/vat2.jpg',
  thumbImage: 'assets/vat2thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Dhanwanta Naik'
},
{
  image: 'assets/vat3.jpg',
  thumbImage: 'assets/vat3thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Neha Sharma'
},
{
  image: 'assets/vat4.jpg',
  thumbImage: 'assets/vat4thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Payal Netam'
},{
  image: 'assets/vat7.jpg',
  thumbImage: 'assets/vat7thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Samiksha Dhurve'
},{
  image: 'assets/vat8.jpg',
  thumbImage: 'assets/vat8thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Rita Patel'
},{
  image: 'assets/vat9.jpg',
  thumbImage: 'assets/vat9thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Archana Thakur'
},{
  image: 'assets/vat10.jpg',
  thumbImage: 'assets/vat10thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Baby of Sou Sapna Netam'
},{
  image: 'assets/vat11.jpg',
  thumbImage: 'assets/vat11thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou lalita Shahu'
},{
  image: 'assets/vat12.jpg',
  thumbImage: 'assets/vat12thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Kalpana Sonekar'
},{
  image: 'assets/vat13.jpg',
  thumbImage: 'assets/vat13thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Sushama Siddam'
},{
  image: 'assets/vat14.jpg',
  thumbImage: 'assets/vat14thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Pranita Yerpude'
},{
  image: 'assets/vat15.jpg',
  thumbImage: 'assets/vat15thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Khushboo Badel'
},{
  image: 'assets/vat16.jpg',
  thumbImage: 'assets/vat16thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Priya Thool'
},{
  image: 'assets/vat17.jpg',
  thumbImage: 'assets/vat17thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Sangeeta Deogade'
},{
  image: 'assets/vat18.jpg',
  thumbImage: 'assets/vat18thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Namita Sahare'
},{
  image: 'assets/vat19.jpg',
  thumbImage: 'assets/vat19thumb.jpg',
  alt: 'Vatsalyam ',
  title: 'Sou Manisha Bhakerao'
}
  ];

  /* 
  create table donorinfo (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(600) NOT NULL,
    email varchar(20),
    date DATE,
    PRIMARY KEY (id),
    INDEX (name, email)
  ); 
  insert into donorinfo values ('raju',password('rajudeshmukh'),'amolmandar@gmail.com','2021-07-06');
  SELECT SHA2('Angelo',512);
  */
}
