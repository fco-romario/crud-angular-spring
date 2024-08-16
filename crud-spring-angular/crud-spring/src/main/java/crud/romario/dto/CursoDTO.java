package crud.romario.dto;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record CursoDTO(
		@JsonProperty("_id") Long id,
		@NotBlank @NotNull @Size(min = 5, max = 100) String name,
		@NotNull @Size(max = 10) @Pattern(regexp = "Back-end|Front-end") String category,
		@NotBlank @NotEmpty @Valid List<AulaDTO> aulas) {
}
