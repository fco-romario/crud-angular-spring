import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [
      {
        _id: '1',
        name: 'Angular',
        category: 'Frint-end'
      }
  ];

  displayedColumns = ['name', 'category']

  constructor() { }

  ngOnInit(): void {
  }

}
