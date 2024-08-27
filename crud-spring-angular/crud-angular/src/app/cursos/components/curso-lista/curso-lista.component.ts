import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../../model/curso';
import { GategoriaPipe } from '../../../shared/pipes/gategoria.pipe';
import { MatMiniFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'app-curso-lista',
    templateUrl: './curso-lista.component.html',
    styleUrls: ['./curso-lista.component.scss'],
    standalone: true,
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatIcon, MatMiniFabButton, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, GategoriaPipe]
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
