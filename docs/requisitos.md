# Requisitos do sistema

O sistema permite que clientes solicitem o aluguel de automóveis e que agentes analisem esses pedidos. O desenvolvimento será feito em Node.js, com arquitetura MVC e banco de dados MongoDB.

## Perfis de acesso

- **Cliente:** mantém seus dados e cria, consulta, edita e cancela seus próprios pedidos.
- **Agente:** representa uma empresa ou um banco e realiza a análise financeira dos pedidos.
- **Agente do tipo banco:** também pode conceder crédito associado a um pedido.

O uso do sistema exige cadastro e autenticação. As operações disponíveis dependem do perfil do usuário.

## Funcionalidades

| Código | Requisito |
| --- | --- |
| RF01 | Cadastrar usuários e permitir acesso conforme o perfil. |
| RF02 | Cadastrar, consultar, editar e excluir clientes. |
| RF03 | Cadastrar, consultar, editar e excluir automóveis. |
| RF04 | Cadastrar, consultar, editar e excluir agentes dos tipos empresa e banco. |
| RF05 | Permitir que o cliente crie, consulte, edite e cancele seus próprios pedidos. |
| RF06 | Exibir o status atualizado dos pedidos do cliente. |
| RF07 | Permitir que agentes consultem pedidos pendentes e registrem uma avaliação financeira. |
| RF08 | Atualizar o status do pedido de acordo com a avaliação. |
| RF09 | Cadastrar, consultar, editar e excluir contratos de crédito associados aos pedidos, quando houver financiamento. |

## Dados dos cadastros

- **Cliente:** nome, CPF, RG, endereço, profissão e até três entidades empregadoras, com o rendimento de cada uma.
- **Automóvel:** marca, modelo, ano, placa, matrícula ou identificador e proprietário atual.
- **Agente:** nome, CNPJ, endereço e tipo, definido como empresa ou banco.
- **Pedido:** cliente solicitante, automóvel, período de aluguel, data de criação, status e agente responsável pela análise, quando houver.
- **Avaliação financeira:** agente responsável, data da análise, parecer aprovado ou reprovado e justificativa.
- **Contrato de crédito:** pedido, banco responsável, valor financiado, prazo e situação do crédito.

## Regras de negócio

1. Somente usuários cadastrados e autenticados podem utilizar as funcionalidades do sistema.
2. O cliente só pode acessar e alterar os próprios pedidos.
3. Um pedido cancelado não pode ser aprovado ou colocado em execução.
4. Somente agentes podem realizar avaliações financeiras.
5. A avaliação deve identificar o agente que a realizou.
6. Cada cliente pode ter, no máximo, três vínculos de empregador e rendimento.
7. O crédito, quando existir, deve ser concedido por um agente do tipo banco.
8. Todo automóvel deve ter um proprietário identificado: cliente, empresa ou banco.
9. Mudanças nas regras ou no modelo devem ser refletidas no código e nos diagramas UML.

## Status dos pedidos

Os status adotados para o projeto são **Pendente**, **Aprovado**, **Reprovado** e **Cancelado**. O pedido começa pendente e passa para aprovado ou reprovado após a análise. Quando o cliente cancela o pedido, ele passa para cancelado.

## Requisitos técnicos

- Aplicação web em Node.js.
- Arquitetura MVC.
- Persistência em MongoDB.
- Código e modelos UML versionados no GitHub.
- README conforme o modelo fornecido pelo professor.
