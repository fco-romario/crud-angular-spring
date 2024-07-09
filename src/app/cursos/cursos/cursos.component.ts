import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, of } from 'rxjs';
import { Curso } from 'src/app/cursos/model/curso';
import { ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog
  ) {
    this.cursos$ = this.cursosService.list().pipe(
      catchError(error => {
        console.log(error);
        this.onError('Erro ao tentar carregar cursos')
        return of([]);
      })
    );

  }

  ngOnInit(): void {
  }

  onError(errorMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    }
    )
  }

}
