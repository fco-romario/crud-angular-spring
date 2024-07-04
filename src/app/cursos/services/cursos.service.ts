import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly api = '/assets/cursos.json'

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.api)
      .pipe(
        first(),
        tap(cursos => console.log(cursos))
      )
  }
}
