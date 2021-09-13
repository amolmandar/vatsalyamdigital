import { Component, HostListener } from '@angular/core';
import { ResponsiveService } from './shared/services/responsive.service';
import { RouterModule, Routes } from '@angular/router';
import {TooltipPosition} from '@angular/material/tooltip';
import 'hammerjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vatsalyam';
  scrHeight;
  scrWidth;
  isM:boolean;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log("from app .ts");
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private responsiveService:ResponsiveService){
  }
  ngOnInit(){
    this.responsiveService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        console.log('Mobile device detected')
        this.isM=true;
        
      }
      else{
        console.log('Desktop detected');
        this.isM=false;
      }
      this.responsiveService.isM=this.isM;
    });
    this.onResize();    
  }

  onResize(){
    this.responsiveService.checkWidth();
  }
}
