package crud.romario.enums.converters;

import java.util.stream.Stream;
import crud.romario.enums.Status;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class StatusConverter implements AttributeConverter<Status, String>{

	@Override
	public String convertToDatabaseColumn(Status status) {
		if(status == null) {
			return null;
		}
		return status.getDescricao();
	}

	@Override
	public Status convertToEntityAttribute(String descricao) {
		if(descricao == null) {
			return null;
		}
		return Stream.of(Status.values())
				.filter(c -> c.getDescricao().equals(descricao))
				.findFirst()
				.orElseThrow(() -> new IllegalArgumentException());
	}

}
