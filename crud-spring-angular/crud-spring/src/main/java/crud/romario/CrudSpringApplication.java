package crud.romario;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import crud.romario.enums.Category;
import crud.romario.model.Curso;
import crud.romario.model.Aula;
import crud.romario.repository.CursoRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
	
	@Bean
	@Profile("dev")
	CommandLineRunner initDataBase(CursoRepository cursoRepository) {
		return args -> {
			cursoRepository.deleteAll();
			for(int i = 0; i < 20; i++){
				Curso c = new Curso();
				c.setName("Angular com Spring" + i);
				c.setCategory(Category.FRONT_END);
				
				Aula l1 = new Aula();
				l1.setName("Introdução");
				l1.setYoutubeUrl("i99mJpBNEJM");
				l1.setCurso(c);
				
				Aula l2 = new Aula();
				l2.setName("Angular");
				l2.setYoutubeUrl("i22mJpBNEKO");
				l2.setCurso(c);
				
				c.getAulas().addAll(Arrays.asList(l1, l2));
				
				cursoRepository.save(c);
			}
			
		};
	}
}
