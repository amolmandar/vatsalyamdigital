import { Component, OnInit,Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PdfbodyComponent } from './pdfbody/pdfbody.component';

@Component({
  selector: 'pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit {
  fileName:string;
  constructor(private matDialog: MatDialog,private dialogRef: MatDialogRef<PdfviewerComponent>,
    @Inject(MAT_DIALOG_DATA) public  data) { }

  ngOnInit(): void {
    //this.dialogRef.updatePosition=
    this.dialogRef.updateSize('80%', '80%');
    console.log('from pdf:'+this.data[0]);
    this.fileName=this.data.pdfFileName?'assets/'+this.data.pdfFileName:'assets/sagarsahil.pdf';
    console.log('from pdf:'+this.data.pdfFileName);
  }
  //openDialog() {
    //const dialogConfig = new MatDialogConfig();
    //dialogConfig.position={'top':'0','left':'0'};
    //dialogConfig.maxWidth="100%";
    //dialogConfig.minWidth="50%";
    //dialogConfig.width='100%';
    //dialogConfig.height='100px';
    //dialogConfig.panelClass = ".df-container1";

    //this.matDialog.open(PdfviewerComponent, dialogConfig);

  //}
close(){
  console.log("closing opendialog!!!");
  this.dialogRef.close();
  console.log("closedopendialog!!!")
}
}
