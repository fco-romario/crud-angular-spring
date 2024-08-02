package crud.romario.dto.mapper;

import org.springframework.stereotype.Component;

import crud.romario.dto.CursoDTO;
import crud.romario.enums.Category;
import crud.romario.model.Curso;

@Component
public class CursoMapper {
	
	public CursoDTO toDTO(Curso curso){
		if(curso == null) {
			return null;
		}
		return new CursoDTO(curso.getId(), curso.getName(), curso.getCategory().getDescricao(),
				curso.getAulas());
	}
	
	public Curso toEntity(CursoDTO cursoDTO){
		if(cursoDTO == null) {
			return null;
		}
		
		Curso curso = new Curso();
		if(cursoDTO.id() != null) {
			curso.setId(cursoDTO.id());
		}
		curso.setName(cursoDTO.name());
		curso.setCategory(convertCategoryValue(cursoDTO.category()));
		return curso;
	}
	
	 public Category convertCategoryValue(String value) {
	        if (value == null) {
	            return null;
	        }
	        return switch (value) {
	            case "Front-end" -> Category.FRONT_END;
	            case "Back-end" -> Category.BACK_END;
	            default -> throw new IllegalArgumentException("Categoria inválida: " + value);
	        };
	    }
}
