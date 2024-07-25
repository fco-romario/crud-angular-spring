import { CursosService } from '../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { Curso } from 'src/app/cursos/model/curso';
import { ConfirmacaoDialoagComponent } from 'src/app/shared/componentes/confirmacao-dialoag/confirmacao-dialoag.component';
import { ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos$: Observable<Curso[]> | null = null;

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

  recarregarCursos(): void {
    this.cursos$ = this.cursosService.list().pipe(
      catchError(erro => {
        this.onError('Erro ao tentar carregar cursos');
        return of([]);
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
