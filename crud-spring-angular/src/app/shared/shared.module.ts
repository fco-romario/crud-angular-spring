import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { GategoriaPipe } from './pipes/gategoria.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    GategoriaPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,

  ],
  exports: [ErrorDialogComponent, GategoriaPipe]
})
export class SharedModule { }
