package crud.romario.enums;


public enum Category {
	BACK_END("Back-end"), FRONT_END("Front-end");
	
	private String descricao;

	private Category(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	@Override
	public String toString() {
		return descricao;
	}
	
	
} 
