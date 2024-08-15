package crud.romario.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import crud.romario.dto.CursoDTO;
import crud.romario.dto.mapper.CursoMapper;
import crud.romario.enums.Status;
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
	private final CursoMapper cursoMapper;

	public CursoService(CursoRepository cursoRepository, CursoMapper cursoMapper) {
		this.cursoRepository = cursoRepository;
		this.cursoMapper = cursoMapper;
	}
	
	public List<CursoDTO> list() {
		return cursoRepository.findAllByStatus(Status.ATIVO)
				.stream()
				.map(curso -> cursoMapper.toDTO(curso))
				.collect(Collectors.toList());
			
	}
	
	public CursoDTO buscarPorId(@NotNull @Positive Long id) {
		return cursoRepository.findByIdAndStatus(id, Status.ATIVO)
				.map(curso -> cursoMapper.toDTO(curso))
				.orElseThrow(() -> new RecordNotFoundException(id));
	}
	
	public CursoDTO salvar(@Valid @NotNull CursoDTO curso) {
		return cursoMapper.toDTO(cursoRepository.save(cursoMapper.toEntity(curso)));
	}
	
	public CursoDTO atualizar(@NotNull @Positive Long id, @Valid @NotNull CursoDTO cursoDTO) {
		return cursoRepository.findByIdAndStatus(id, Status.ATIVO)
				.map(cursoParaAtualizar -> {
					Curso curso = cursoMapper.toEntity(cursoDTO);
					cursoParaAtualizar.setName(cursoDTO.name());
					cursoParaAtualizar.setCategory(cursoMapper.convertCategoryValue(cursoDTO.category()));
					//cursoParaAtualizar.setAulas(curso.getAulas());
					cursoParaAtualizar.getAulas().clear();
					curso.getAulas().forEach(aula -> cursoParaAtualizar.getAulas().add(aula));
					return cursoMapper.toDTO(cursoRepository.save(cursoParaAtualizar));
				}).orElseThrow(() -> new RecordNotFoundException(id));
	}
	
	public void deletar(@NotNull @Positive Long id) {
		cursoRepository.findByIdAndStatus(id, Status.ATIVO)
			.map(curso -> {
				curso.setStatus(Status.INATIVO);
				return cursoRepository.save(curso);
			})
			.orElseThrow(() -> new RecordNotFoundException(id));
	}
}
