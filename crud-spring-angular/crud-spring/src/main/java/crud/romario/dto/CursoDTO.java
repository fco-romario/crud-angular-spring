package crud.romario.dto;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import crud.romario.enums.Category;
import crud.romario.enums.validation.ValueOfEnum;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CursoDTO(
		@JsonProperty("_id") Long id,
		@NotBlank @NotNull @Size(min = 5, max = 100) String name,
		@NotNull @Size(max = 10) @ValueOfEnum(enumClass = Category.class) String category,
		@NotNull @NotEmpty @Valid List<AulaDTO> aulas) {
}
