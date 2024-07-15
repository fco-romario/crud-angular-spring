package crud.romario.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crud.romario.model.Curso;
import crud.romario.repository.CursoRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {
	
	private final CursoRepository cursoRepository;
	
	@GetMapping()
	public List<Curso> List() {
		return cursoRepository.findAll();
	}
	
	
}
