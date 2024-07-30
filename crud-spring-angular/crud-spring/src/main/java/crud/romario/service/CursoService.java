package crud.romario.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import crud.romario.exception.RecordNotFoundException;
import crud.romario.model.Curso;
import crud.romario.repository.CursoRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CursoService {
	
	private final CursoRepository cursoRepository;

	public CursoService(CursoRepository cursoRepository) {
		this.cursoRepository = cursoRepository;
	}
	
	public List<Curso> list() {
		return cursoRepository.findAllByStatus("Ativo");
	}
	
	public Curso buscarPorId(@NotNull @Positive Long id) {
		return cursoRepository.findByIdAndStatus(id, "Ativo").orElseThrow(() -> new RecordNotFoundException(id));
	}
	
	public Curso salvar(@Valid Curso curso) {
		return cursoRepository.save(curso);
	}
	
	public Curso atualizar(@NotNull @Positive Long id, @Valid Curso curso) {
		return cursoRepository.findByIdAndStatus(id, "Ativo")
				.map(cursoParaAtualizar -> {
					cursoParaAtualizar.setName(curso.getName());
					cursoParaAtualizar.setCategory(curso.getCategory());
					return cursoRepository.save(cursoParaAtualizar);
				})
				.orElseThrow(() -> new RecordNotFoundException(id));
	}
	
	public void deletar(@NotNull @Positive Long id) {
		cursoRepository.findByIdAndStatus(id, "Ativo")
			.map(curso -> {
				curso.setStatus("Inativo");
				return cursoRepository.save(curso);
			})
			.orElseThrow(() -> new RecordNotFoundException(id));
	}
}
