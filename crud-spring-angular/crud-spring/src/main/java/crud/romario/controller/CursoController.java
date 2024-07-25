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
import crud.romario.repository.CursoRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;

@Validated
@RestController
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursoController {
	
	private final CursoRepository cursoRepository;
	
	@GetMapping()
	public List<Curso> listar() {
		//return cursoRepository.findAll();
		return cursoRepository.findAllByStatus("Ativo");
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Curso> buscarPorId(@PathVariable @NotNull @Positive Long id) {
		//return cursoRepository.findById(id);
		return cursoRepository.findByIdAndStatus(id, "Ativo")
				.map(curso -> ResponseEntity.ok().body(curso))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public Curso Salvar(@RequestBody @Valid Curso curso){
		//System.out.println(curso);
		return cursoRepository.save(curso);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Curso> atualizar(@PathVariable() @NotNull @Positive Long id, @RequestBody @Valid Curso curso){
		//return cursoRepository.findById(id)
		return cursoRepository.findByIdAndStatus(id, "Ativo")
				.map(cursoParaAtualizar -> {
					cursoParaAtualizar.setName(curso.getName());
					cursoParaAtualizar.setCategory(curso.getCategory());
					Curso cursoAtualizado = cursoRepository.save(cursoParaAtualizar);
					
					return ResponseEntity.ok().body(cursoAtualizado);
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletar(@PathVariable @NotNull @Positive Long id) {
		//return cursoRepository.findById(id);
		return cursoRepository.findByIdAndStatus(id, "Ativo")
				.map(curso -> {
					curso.setStatus("Inativo");
					//cursoRepository.deleteById(id);
					cursoRepository.save(curso);
					return ResponseEntity.noContent().<Void>build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
	
}
