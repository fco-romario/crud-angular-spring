import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {

  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remover = new EventEmitter(false)

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  aoAdd(): void {
    this.add.emit(true);
  }

  aoEditar(curso: Curso): void {
    this.edit.emit(curso);
  }

  aoRemover(curso: Curso): void {
    this.remover.emit(curso);
  }

}
