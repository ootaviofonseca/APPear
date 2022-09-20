/// <reference types="cypress" />

describe('APPear', () => {
    it('Cadastrar item perdido', () => {
        cy.visit('http://localhost:8080/dash/perdidos');
        cy.get('[name=categoria]').select('Vestuário');
        cy.get('[name=descricao]').type('Roupa da cor preta com listas azuis, tamanho P');
        cy.get('[name=data]').type('2022-09-03');
        cy.get('[name=fotos]').type('Foto.png');
        cy.get('[id=botaoConfirmar]').click();
    });

    it('Buscar um item', () => {
        cy.visit('http://localhost:8080/dash/buscar');
        cy.get('[name=categoria]').select('Documento');
        cy.get('[type=submit]').click();
    });

    it('Excluir um item', () => {
        cy.visit('http://localhost:8080/dash/cadastrados');
        cy.get('[aria-rowindex=1]').click();
        cy.get('[id=categoria]').select('Documento');
        cy.get('[id=descricao]').clear();
        cy.get('[id=descricao]').type('Documento com o nome Pedro');
        cy.get('[id=editar]').click();
    });
});