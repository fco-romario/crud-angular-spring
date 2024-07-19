import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoListaComponent } from './curso-lista/curso-lista.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoFormComponent,
    CursoListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
