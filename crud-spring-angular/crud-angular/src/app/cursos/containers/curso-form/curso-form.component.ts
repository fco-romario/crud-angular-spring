import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, NonNullableFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../model/curso';
import { Aula } from '../../model/aula';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss']
})
export class CursoFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: NonNullableFormBuilder,
    private service: CursosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public formUtils: FormUtilsService
  ) {}

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
        _id: [curso._id],
        name: [curso.name, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
        category: [ curso.category, [Validators.required]],
        aulas: this.fb.array(this.obterAulas(curso), Validators.required)
      });
  }
  private obterAulas(curso: Curso) {
    const aulas = [];
    if(curso?.aulas) {
      curso.aulas.forEach(aula => aulas.push(this.criarAulas(aula)))
    } else {
      aulas.push(this.criarAulas());
    }
    return aulas;
  }

  private criarAulas(aulas: Aula = { id: '', name: '', youtubeUrl: ''}) {
    return this.fb.group({
      id: [aulas.id],
      name: [aulas.name, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      youtubeUrl: [aulas.youtubeUrl, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }

  public aulasFormArrays() {
    return (<UntypedFormArray>this.form.get('aulas'))?.controls;
  }

  public addNovaAula() {
    const aulas = this.form.get('aulas') as UntypedFormArray;
    aulas.push(this.criarAulas());
  }

  public deletarAula(index: number) {
    const aulas = this.form.get('aulas') as UntypedFormArray;
    aulas.removeAt(index);
  }

  aoSubmeter(): void {
    if(this.form.valid) {
      this.service.salvar(this.form.value)
        .subscribe(resposta => {
          this.onSucesso();
      }, error => this.onErro());

    } else {
      alert("form inválido")
    }
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

}
