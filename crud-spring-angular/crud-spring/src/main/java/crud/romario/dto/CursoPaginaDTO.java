package crud.romario.dto;

import java.util.List;

public record CursoPaginaDTO(List<CursoDTO> cursos, long totalElements, int totalPages) {

}
