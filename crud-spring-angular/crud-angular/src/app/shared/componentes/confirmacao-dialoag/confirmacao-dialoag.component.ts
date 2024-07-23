import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-dialoag',
  templateUrl: './confirmacao-dialoag.component.html',
  styleUrls: ['./confirmacao-dialoag.component.scss']
})
export class ConfirmacaoDialoagComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoDialoagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

  aoConfirmar(resposta: boolean): void {
    this.dialogRef.close(resposta);
  }
}
