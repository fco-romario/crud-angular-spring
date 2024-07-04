import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  list(): Curso[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'Frint-end'
      }
    ]
  }
}
