import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
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

  onAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route})
  }

}
