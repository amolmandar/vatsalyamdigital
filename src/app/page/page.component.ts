import { VatsalyamYearDataComponent } from './../vatsalyam-year-data/vatsalyam-year-data.component';
import { ContentService } from './../shared/services/content.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { stringify } from '@angular/compiler/src/util';
import { DatabaseService } from '../shared/services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import { HostListener } from '@angular/core';
import { ResponsiveService } from '../shared/services/responsive.service';
//import { HostListener } from "@angular/core";
import { MatGridListModule } from '@angular/material/grid-list'; 
export class SelectData{
  name:string;
  email:string;

}
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
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log("from page.ts");
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private route: ActivatedRoute,
    private contentService:ContentService,private responsiveService:ResponsiveService
    ) { 
      this.getScreenSize();

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
