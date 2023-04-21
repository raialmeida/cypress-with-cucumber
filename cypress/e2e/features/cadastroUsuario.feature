Feature: Cadastrar Usuario

    @smoke
    Scenario: Cadastrar novo usuario
        Given que esteja na pagina de cadastro de usuario
        When preenho os informção de cadastro
        Then deve exibir a msg de usuario cadastrada