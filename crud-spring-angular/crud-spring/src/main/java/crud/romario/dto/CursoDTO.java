package crud.romario.dto;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record CursoDTO(
		@JsonProperty("_id") Long id,
		@NotBlank @NotNull @Size(min = 5, max = 100) String name,
		@NotNull @Size(max = 10) @Pattern(regexp = "Back-end|Front-end") String category) {
}
