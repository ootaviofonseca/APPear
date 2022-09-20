export default class APPear{
	constructor(categoria, descricao, data, imagem) {
		this.categoria = categoria;
		this.descricao = descricao;
		this.data = data;
		this.errors = [];
	}
	validateDesc() {
		if (this.descricao) {
			if (this.descricao.length > 100) {
			this.errors.push("A descricao tem mais de 100 caracteres.");
			}
		} else {
			this.errors.push("Item criado.");
		}
	}

	validadeCat() {
		if (this.categoria ==null) {
			this.errors.push("Categoria vazia impossivel criar item");
		} else {
			this.errors.push("Item criado.");
		}
	}
}
  