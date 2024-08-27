import { Curso } from './../../model/curso';
import { CursosService } from '../../services/cursos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { ConfirmacaoDialoagComponent } from 'src/app/shared/componentes/confirmacao-dialoag/confirmacao-dialoag.component';
import { ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';
import { CursoPagina } from '../../model/cursoPagina';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CursoListaComponent } from '../../components/curso-lista/curso-lista.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.scss'],
    standalone: true,
    imports: [MatCard, MatToolbar, NgIf, CursoListaComponent, MatPaginator, MatProgressSpinner, AsyncPipe]
})
export class CursosComponent implements OnInit {
  cursos$: Observable<CursoPagina> | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageIndex = 0;
  pageSize = 10;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {

  }

  ngOnInit(): void {
    this.recarregarCursos();
  }

  recarregarCursos(pageEvent: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 }): void {
    this.cursos$ = this.cursosService.list(pageEvent.pageIndex, pageEvent.pageSize)
    .pipe(
      tap(() => {
        this.pageIndex = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
      }),
      catchError(erro => {
        this.onError('Erro ao tentar carregar cursos');
        return of({cursos: [], totalElements: 0, totalPages: 0});
      })
    );
  }

  onError(errorMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    }
    )
  }

  aoAdd(): void {
    this.router.navigate(['new'], { relativeTo: this.route})
  }

  aoEditar(curso: Curso): void {
    this.router.navigate(['edit', curso._id], { relativeTo: this.route})
  }

  aoRemover(curso: Curso): void {
    const dialogRef = this.dialog.open(ConfirmacaoDialoagComponent, {
      data: 'Tem certeza que deseja remover esse curso?'
    });

    dialogRef.afterClosed().subscribe((resposta: boolean) => {
      if(resposta) {
        this.cursosService.remover(curso._id).subscribe(
          () => {
            this.recarregarCursos();
            this.snackBar.open('Curso removido com sucesso!', 'X',
              {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
          },
          () => this.onError('Erro ao tentar remover curso.')
        )
      }
    });
  }

}
