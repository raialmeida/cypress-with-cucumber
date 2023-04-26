Feature: Cadastrar Usuário

    Scenario: Cadastrar novo usuário
        Given que esteja na página de cadastro de usuário
        When preencho as informações de cadastro
        Then deve exibir a mensagem de usuário cadastrado