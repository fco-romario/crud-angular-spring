import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-confirmacao-dialoag',
    templateUrl: './confirmacao-dialoag.component.html',
    styleUrls: ['./confirmacao-dialoag.component.scss'],
    standalone: true,
    imports: [MatDialogContent, MatDialogActions, MatButton]
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
