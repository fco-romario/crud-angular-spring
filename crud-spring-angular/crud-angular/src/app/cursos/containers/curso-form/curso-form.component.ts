import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.fb.group({
    _id: [''],
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    category: ['', [Validators.required]],
  })

  constructor(
    private fb: NonNullableFormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.form.patchValue({
      _id: curso._id,
      name: curso.name,
      category: curso.category
    })
    console.log(this.form.value);

  }

  aoSubmeter(): void {
    this.service.salvar(this.form.value)
      .subscribe(resposta => {
        this.onSucesso();
    }, error => {
      console.log(error);
      this.onErro();
    });
  }

  aoCancelar(): void {
    this.location.back();
  }

  onSucesso(): void {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000});
    this.aoCancelar()
  }

  onErro(): void {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000});
  }

  exibeMsgErro(nomeDoCampo: string): string {
    const campo = this.form.get(nomeDoCampo);

    if(campo?.hasError('required')) {
      return 'Campo obrigatório.'
    }

    if(campo?.hasError('minlength')) {
      const tamanhoMinimo = campo.errors ? campo.errors['minlength']['requiredLength'] : 5;
      return `Tamanho mínimo precisa ser de ${tamanhoMinimo} caracteres`;
    }

    if(campo?.hasError('maxlength')) {
      const tamanhoMinimo = campo.errors ? campo.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho máximo precisa ser de ${tamanhoMinimo} caracteres`;
    }
    return 'Campo inválido';
  }
}
