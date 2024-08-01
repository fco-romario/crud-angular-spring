package crud.romario.enums.converters;

import java.util.stream.Stream;
import crud.romario.enums.Category;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CategoryConverter implements AttributeConverter<Category, String>{

	@Override
	public String convertToDatabaseColumn(Category category) {
		if(category == null) {
			return null;
		}
		return category.getDescricao();
	}

	@Override
	public Category convertToEntityAttribute(String descricao) {
		if(descricao == null) {
			return null;
		}
		return Stream.of(Category.values())
				.filter(c -> c.getDescricao().equals(descricao))
				.findFirst()
				.orElseThrow(() -> new IllegalArgumentException());
	}
}
