# Histórias de usuário

## HU01 — Cadastro e acesso

Como cliente, quero criar uma conta e entrar no sistema para solicitar o aluguel de um automóvel.

**Critérios de aceitação:**

- O acesso às funcionalidades exige cadastro e autenticação.
- Após entrar, o usuário acessa as operações permitidas para seu perfil.

## HU02 — Dados do cliente

Como cliente, quero consultar e atualizar meus dados para manter as informações usadas na análise do pedido corretas.

**Critérios de aceitação:**

- O cadastro contém nome, CPF, RG, endereço e profissão.
- É possível informar até três entidades empregadoras, com o rendimento de cada uma.

## HU03 — Consulta de automóveis

Como cliente, quero consultar os automóveis cadastrados para escolher o veículo que desejo alugar.

**Critérios de aceitação:**

- A consulta apresenta marca, modelo, ano, placa e identificador do automóvel.
- Cada automóvel possui um proprietário identificado como cliente, empresa ou banco.

## HU04 — Criação de pedido

Como cliente, quero escolher um automóvel e informar o período de aluguel para enviar meu pedido.

**Critérios de aceitação:**

- O pedido fica associado ao cliente que o criou e ao automóvel escolhido.
- O sistema registra o período, a data de criação e o status inicial pendente.

## HU05 — Acompanhamento do pedido

Como cliente, quero consultar meus pedidos para acompanhar o resultado da análise.

**Critérios de aceitação:**

- A consulta apresenta o status atualizado de cada pedido.
- O cliente não consegue consultar pedidos de outros clientes.

## HU06 — Edição de pedido

Como cliente, quero editar meu pedido para corrigir o automóvel ou o período solicitado.

**Critérios de aceitação:**

- Somente o cliente solicitante pode editar o pedido.
- A edição não permite trocar o solicitante nem aprovar um pedido cancelado.

## HU07 — Cancelamento de pedido

Como cliente, quero cancelar meu pedido quando não precisar mais do aluguel.

**Critérios de aceitação:**

- Somente o cliente solicitante pode cancelar o pedido.
- O pedido passa para cancelado e não pode ser aprovado ou colocado em execução.

## HU08 — Gestão de clientes

Como agente, quero cadastrar, consultar, editar e excluir clientes para manter seus dados no sistema.

**Critérios de aceitação:**

- As operações utilizam os dados pessoais, os empregadores e os rendimentos do cliente.
- O sistema não permite cadastrar mais de três vínculos empregatícios para o mesmo cliente.

## HU09 — Gestão de automóveis

Como agente, quero cadastrar, consultar, editar e excluir automóveis para manter os veículos disponíveis para solicitação.

**Critérios de aceitação:**

- O cadastro contém marca, modelo, ano, placa e matrícula ou identificador.
- O proprietário atual deve ser um cliente, uma empresa ou um banco identificado no sistema.

## HU10 — Gestão de agentes

Como agente, quero cadastrar, consultar, editar e excluir os dados das instituições para identificar as empresas e os bancos envolvidos nos pedidos.

**Critérios de aceitação:**

- O cadastro contém nome, CNPJ, endereço e tipo.
- O tipo deve ser empresa ou banco.

## HU11 — Consulta de pedidos pendentes

Como agente, quero consultar os pedidos pendentes para selecionar os que precisam de análise financeira.

**Critérios de aceitação:**

- A consulta permite identificar os pedidos que aguardam análise.
- O agente pode consultar o solicitante, o automóvel e o período de aluguel.

## HU12 — Avaliação financeira

Como agente, quero aprovar ou reprovar um pedido e registrar uma justificativa para informar o resultado da análise.

**Critérios de aceitação:**

- Somente agentes podem avaliar pedidos; pedidos cancelados não podem ser aprovados.
- A avaliação registra agente responsável, data, parecer e justificativa.
- O status do pedido é atualizado conforme o parecer.

## HU13 — Contrato de crédito

Como agente de banco, quero cadastrar, consultar, editar e excluir um contrato de crédito ligado ao pedido para registrar o financiamento, quando necessário.

**Critérios de aceitação:**

- O contrato é opcional e fica associado a um pedido e ao banco responsável.
- O contrato contém valor financiado, prazo e situação do crédito.
- A concessão do crédito é permitida somente a agentes do tipo banco.
