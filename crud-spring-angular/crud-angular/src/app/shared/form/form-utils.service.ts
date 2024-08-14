import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() { }

  buscaMsgErroCampoForm(campo: UntypedFormControl) {
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
  public exibirMsgErro(formGroup: UntypedFormGroup, nomeDoCampo: string) {
    const campo = formGroup.get(nomeDoCampo) as UntypedFormControl;
    return this.buscaMsgErroCampoForm(campo);
  }

  public buscarMsgFormArray(formGroup: UntypedFormGroup, formArrayNome: string, nomeCampoArray: string, index: number) {
    const listaForm = formGroup.get(formArrayNome) as UntypedFormArray;
    const campo = listaForm.controls[index].get(nomeCampoArray) as UntypedFormControl;
    return this.buscaMsgErroCampoForm(campo);
  }

  public ehFormArrayObrigatorio(formGroup: UntypedFormGroup, formArrayName: string) {
    const aulas = formGroup.get(formArrayName) as UntypedFormArray;
    return !aulas.valid && aulas.hasError('required') && aulas.touched;
  }

  validarTodosCamposForm(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup).forEach(campo => {
      const control = formGroup.get(campo);

      if(control instanceof UntypedFormControl){
        control.markAsTouched({ onlySelf: true });
      } else if(control instanceof UntypedFormGroup || control instanceof UntypedFormArray) {
        control.markAsTouched({ onlySelf: true });
        this.validarTodosCamposForm(control);
      }
    })

  }
}
