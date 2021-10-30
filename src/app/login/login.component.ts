//import { MatDialog } from '@angular/material/';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../shared/services/database.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { PdfviewerComponent } from '../pdfviewer/pdfviewer.component';

@Component({
  selector: 'loginform',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resData:JSON[];
  loginForm: FormGroup;
  feedbackForm:FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private databaseService:DatabaseService,
    private formBuilder: FormBuilder,private dialog:MatDialog) { 
      this.resData=JSON.parse(sessionStorage.getItem('data'));
      console.log(sessionStorage.getItem('data'));
    }

  ngOnInit(): void {
    sessionStorage.clear();
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    
      
    });
    this.feedbackForm=this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      feedbackField: [null,[
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(4000)
      ]]
    });
    this.resData=[];
     /* this.databaseService.getDonor(this.loginForm.value).subscribe(
        (data)=>{
              this.resData=data;
              //this.databaseService.setData(this.resData);
      }); */ 
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data ={'name':this.name,'email':this.email,pdfFileName:this.pdfFileName}
    dialogConfig.width="400px"
    dialogConfig.height="700px"
    this.dialog.open(PdfviewerComponent, dialogConfig);
    console.log("sdsds");
    //console.log(dialogConfig.data.name);
    //console.log(this.name);
}

name:string='';
email:any;
pdfFileName;
  getout(){
    sessionStorage.clear();
    this.len=0;
    this.resData=[]
    this.name='';
    this.email=null;
    this.pdfFileName=null;
    //console.log(this.resData);
  }
  len=0;
  fdBack=false;
  submitFeedback(){
    if (!this.feedbackForm.valid) {
      return;
    }
    //this.feedbackForm.reset();
    this.fdBack=true;
    this.databaseService.getMail(this.feedbackForm.value)
    .subscribe((data)=>{
      this.resData=data;
      this.feedbackForm.reset();
      
    });
  }
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.databaseService.getDonor(this.loginForm.value).subscribe(
      (data)=>{
        //console.log('data collected ...');
        //console.log(data[0].name);
        this.resData=data;
        sessionStorage.setItem('data',JSON.stringify(this.resData));
        //this.databaseService.setData(this.resData);
        this.len=this.resData.length;
        //this.name=JSON.parse(this.resData);//
        //this.name=this.name.name;
        //this.email=this.resData[0]['email'];
        //Object.keys(this.resData).forEach(key=>{
          console.log('collecting keys...')
          this.email=data[0].email;
          this.name=data[0].name;
          this.pdfFileName=data[0].pdffilename;
          this.openDialog();
        //});
        
      });
      //this.name= this.loginForm.value.name;
      //this.email= this.loginForm.value.email;
      //this.openDialog();
    //console.log(this.loginForm.value);
    //console.log(this.loginForm.value.email);
    
  }



  


}
