import { Curso } from "./curso";

export interface CursoPagina {
  cursos: Curso[];
  totalElements: number;
  totalPages: number;
}
