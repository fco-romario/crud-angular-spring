package crud.romario.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import crud.romario.model.Curso;
import crud.romario.service.CursoService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/api/cursos")
public class CursoController {

	private final CursoService cursoService;
	
	public CursoController(CursoService cursoService) {
		this.cursoService = cursoService;
	}
	
	@GetMapping()
	public List<Curso> listar() {
		//return cursoRepository.findAll();
		return cursoService.list();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Curso> buscarPorId(@PathVariable @NotNull @Positive Long id) {
		// return cursoRepository.findById(id);
		return cursoService.buscarPorId(id)
				.map(curso -> ResponseEntity.ok().body(curso))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public Curso Salvar(@RequestBody @Valid Curso curso) {
		return cursoService.salvar(curso);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Curso> atualizar(@PathVariable() @NotNull @Positive Long id,
			@RequestBody @Valid Curso curso) {
		return cursoService.atualizar(id, curso)
				.map(cursoAtualizado -> ResponseEntity.ok().body(cursoAtualizado))
				.orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletar(@PathVariable @NotNull @Positive Long id) {
		if(cursoService.deletar(id)) {
			return ResponseEntity.noContent().<Void>build(); 
		}
		return ResponseEntity.notFound().build();
	}

}
