import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './containers/curso-form/curso-form.component';


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
