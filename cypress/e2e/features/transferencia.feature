Feature: Tranferencia de valores

    Context: dado que existe uma conta de destino valido
    
    @cadastro
    Scenario: Transferir R$100 para conta Teste
        Given que estela na tela de transfêrencia
        When faço a tranferencia no valor de "100"
        Then deve subtrair do saldo da conta

# Scenario: Transferir R$100 com saldo zerado
#     Given que estela na tela de transfêrencia
#     When faço a tranferencia no valor de "R$100"
#     Then não deve realizar a transfêrencia informando saldo insuficiente