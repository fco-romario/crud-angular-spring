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
        delay(800),
        tap(cursos => console.log(cursos))
      )
  }

  save(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.API, curso)
  }
}
