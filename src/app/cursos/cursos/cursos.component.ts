import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/cursos/model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Observable<Curso[]>;
  displayedColumns = ['name', 'category'];

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.list();

  }

  ngOnInit(): void {
  }

}
