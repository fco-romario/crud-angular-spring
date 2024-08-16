package crud.romario.model;

import java.util.ArrayList;
import java.util.List;

//import org.hibernate.annotations.SQLDelete;
//import org.hibernate.annotations.SQLRestriction;

import com.fasterxml.jackson.annotation.JsonProperty;

import crud.romario.enums.Category;
import crud.romario.enums.Status;
import crud.romario.enums.converters.CategoryConverter;
import crud.romario.enums.converters.StatusConverter;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
//@SQLDelete(sql = "UPDATE Curso SET status = 'Inativo' WHERE id = ?")
//@SQLRestriction("status = 'Ativo'")
public class Curso {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonProperty("_id")
	private Long id;

	@NotBlank
	@NotNull
	@Size(min = 5, max = 100)
	@Column(length = 200, nullable = false)
	private String name;

	@NotNull
	@Convert(converter = CategoryConverter.class)
	@Column(length = 10, nullable = false)
	private Category category;

	@NotNull
	@Convert(converter = StatusConverter.class)
	@Column(length = 10, nullable = false)
	private Status status = Status.ATIVO;
	
	@NotNull
	@NotEmpty
	@Valid
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "curso")
	private List<Aula> aulas = new ArrayList<>();

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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public List<Aula> getAulas() {
		return aulas;
	}

	public void setAulas(List<Aula> aulas) {
		this.aulas = aulas;
	}
	
}
