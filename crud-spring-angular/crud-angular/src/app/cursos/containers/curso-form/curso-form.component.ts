import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {

  form = this.fb.group({
    name: [''],
    category: [''],
  })

  constructor(
    private fb: NonNullableFormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar,
    private location: Location,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.save(this.form.value)
      .subscribe(resposta => {
        this.onSucesso();
    }, error => {
      console.log(error);
      this.onErro();
    });
  }

  onCancel(): void {
    this.location.back();
  }

  onSucesso(): void {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000});
    this.onCancel()
  }

  onErro(): void {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000});
  }
}
