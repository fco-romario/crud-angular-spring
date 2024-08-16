package crud.romario.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Aula {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@NotNull
	@Size(min = 5, max = 100)
	@Column(length = 100, nullable = false)
	private String name;
	
	@NotBlank
	@NotNull
	@Size(min = 10, max = 11)
	@Column(length = 11, nullable = false)
	private String youtubeUrl;
	
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "curso_fk", nullable = false)
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Curso curso;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getYoutubeUrl() {
		return youtubeUrl;
	}

	public void setYoutubeUrl(String youtubeUrl) {
		this.youtubeUrl = youtubeUrl;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}
	
}
