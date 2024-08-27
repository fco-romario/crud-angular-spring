import { CursoListaComponent } from './components/curso-lista/curso-lista.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';


import { ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './containers/curso-form/curso-form.component';


@NgModule({
    imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule,
    CursosComponent,
    CursoFormComponent,
    CursoListaComponent,
]
})
export class CursosModule { }
