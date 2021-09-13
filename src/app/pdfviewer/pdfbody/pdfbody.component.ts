import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pdfbody',
  templateUrl: './pdfbody.component.html',
  styleUrls: ['./pdfbody.component.css']
})
export class PdfbodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PdfbodyComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  // openDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = "some data";
  //   let dialogRef = this.dialog.open(PdfbodyComponent, dialogConfig);
  // }

}
