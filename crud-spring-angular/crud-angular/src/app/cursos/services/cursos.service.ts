import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable, delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly API = 'api/cursos'

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        first(),
        //delay(800),
        //tap(cursos => console.log(cursos))
      )
  }

  buscarPorId(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${this.API}/${id}`)
  }

  salvar(curso: Partial<Curso>): Observable<Curso> {
    if(curso._id) {
      return this.atualizar(curso);
    }
    return this.criar(curso);
  }

  criar(curso: Partial<Curso>) {
    return this.http.post<Curso>(this.API, curso)
  }

  atualizar(curso: Partial<Curso>) {
    return this.http.put<Curso>(`${this.API}/${curso._id}`, curso).pipe(first())
  }
}
