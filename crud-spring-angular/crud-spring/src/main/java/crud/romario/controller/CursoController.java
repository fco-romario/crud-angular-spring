package crud.romario.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
	public List<Curso> listar() {
		return cursoRepository.findAll();
	}
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public Curso Salvar(@RequestBody Curso curso){
		//System.out.println(curso);
		return cursoRepository.save(curso);
	}
	
	
}
