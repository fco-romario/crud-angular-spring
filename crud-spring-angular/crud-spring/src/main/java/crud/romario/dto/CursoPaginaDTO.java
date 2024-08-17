package crud.romario.dto;

import java.util.List;

public record CursoPaginaDTO(List<CursoDTO> courses, long totalElements, int totalPages) {

}
