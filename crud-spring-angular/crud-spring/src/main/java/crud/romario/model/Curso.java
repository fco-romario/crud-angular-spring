package crud.romario.model;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Where;

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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
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

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "curso")
	private List<Licao> licoes = new ArrayList<>();

}
