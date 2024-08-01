package crud.romario;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import crud.romario.enums.Category;
import crud.romario.model.Curso;
import crud.romario.repository.CursoRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initDataBase(CursoRepository cursoRepository) {
		return args -> {
			cursoRepository.deleteAll();
			
			Curso c = new Curso();
			c.setName("Angular com Spring");
			c.setCategory(Category.FRONT_END);
				
			cursoRepository.save(c);
		};
	}
}
