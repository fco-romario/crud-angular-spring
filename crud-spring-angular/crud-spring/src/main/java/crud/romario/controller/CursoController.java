package crud.romario.controller;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import crud.romario.dto.CursoDTO;
import crud.romario.dto.CursoPaginaDTO;
import crud.romario.service.CursoService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;

@Validated
@RestController
@RequestMapping("/api/cursos")
public class CursoController {

	private final CursoService cursoService;
	
	public CursoController(CursoService cursoService) {
		this.cursoService = cursoService;
	}
	
	@GetMapping()
	public CursoPaginaDTO listar(@RequestParam(defaultValue = "0") @PositiveOrZero int page,
			@RequestParam(defaultValue = "10") @Positive @Max(100) int pageSize) {
		return cursoService.list(page, pageSize);
	}

	@GetMapping("/{id}")
	public CursoDTO buscarPorId(@PathVariable @NotNull @Positive Long id) {
		return cursoService.buscarPorId(id);
	}

	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public CursoDTO salvar(@RequestBody @Valid @NotNull CursoDTO curso) {
		return cursoService.salvar(curso);
	}

	@PutMapping("/{id}")
	public CursoDTO atualizar(@PathVariable() @NotNull @Positive Long id,
			@NotNull @RequestBody @Valid CursoDTO curso) {
		return cursoService.atualizar(id, curso);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void deletar(@PathVariable @NotNull @Positive Long id) {
		cursoService.deletar(id);
		
	}

}
