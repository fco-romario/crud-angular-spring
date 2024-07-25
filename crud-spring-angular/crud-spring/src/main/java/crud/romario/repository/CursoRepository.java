package crud.romario.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crud.romario.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long>{
	List<Curso> findAllByStatus(String status);
	Optional<Curso> findByIdAndStatus(Long id, String status);
}
