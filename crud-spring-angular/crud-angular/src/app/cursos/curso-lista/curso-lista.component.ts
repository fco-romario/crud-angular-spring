import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {

  @Input() cursos: Curso[] = [];
  
  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route})
  }

}
