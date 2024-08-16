package crud.romario.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AulaDTO(
		Long id,
		@NotBlank @NotNull @Size(min = 5, max = 100) String name,
		@NotBlank @NotNull @Size(min = 3, max = 11) String youtubeUrl
		) {

	
}
