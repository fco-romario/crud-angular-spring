import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { GategoriaPipe } from './pipes/gategoria.pipe';
import { ConfirmacaoDialoagComponent } from './componentes/confirmacao-dialoag/confirmacao-dialoag.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    GategoriaPipe,
    ConfirmacaoDialoagComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,

  ],
  exports: [
    ErrorDialogComponent,
    GategoriaPipe,
    ConfirmacaoDialoagComponent
  ]
})
export class SharedModule { }
