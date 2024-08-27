package crud.romario.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Pageable;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crud.romario.enums.Status;
import crud.romario.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long>{
	List<Curso> findAllByStatus(Status status);
	Page<Curso> findAllByStatus(Status status, Pageable pageable);
	Optional<Curso> findByIdAndStatus(Long id, Status status);
}
