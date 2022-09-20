import APPear from "../classes.js"

describe("Criando novo item", () => {
	it("Criando novo item", () => {
		const item = new APPear("Vestuário", 
								"Camisa cor verde tamanho P", 
								"10/09/2022");
	
		expect(item).toEqual({
			categoria: "Vestuário",
			descricao: "Camisa cor verde tamanho P",
			data: "10/09/2022",
			errors: []
		});
	});
});

describe("Validação da descrição", () => {
	it("Mensagem de erro caso a descricao passe de 100 caracteres", () => {
	  const item2 = new APPear("Acessório", 
	  						   "Acessório colar e pulseira em ótimo estado com um defeito na trava da pulseira e colar brilhante em ótimo estado.", 
							   "09/07/2021");
	  item2.validateDesc();

	  expect(item2.errors).toEqual(["A descricao tem mais de 100 caracteres."]);
	});
});

describe("Validação da categoria", () => {
	it("Mensagem de erro caso a categoria seja null", () => {
	  const item3 = new APPear(null, 
	  						   "Iphone 13 pro com capinha do Cruzeiro e tricado na tela", 
							   "11/07/2022");
	  item3.validadeCat();

	  expect(item3.errors).toEqual(["Categoria vazia impossivel criar item"]);
	});
});
