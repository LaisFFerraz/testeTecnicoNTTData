
# Teste Prático - NTT Data

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?style=flat&logo=javascript)
![Cypress](https://img.shields.io/badge/Framework-Cypress-4BC0C0?style=flat&logo=cypress)

Repositório contendo o teste prático de automação de **frontend** e **API** da empresa NTT Data. Os testes foram implementados utilizando **Cypress** e **JavaScript**, seguindo boas práticas de desenvolvimento e padrões de projeto para garantir legibilidade e manutenção do código.

---

## URLs do Projeto

- **Frontend**: [https://front.serverest.dev/](https://front.serverest.dev/)  
- **Swagger API**: [https://serverest.dev/](https://serverest.dev/)

---

## Tecnologias Utilizadas

- Linguagem: **JavaScript**  
- Framework: **Cypress**  
- Controle de versão: **GitHub**

---

## Estrutura do Projeto

O repositório está organizado da seguinte forma:

cypress/
- ├── e2e/ # Contém todos os códigos de teste automatizados
- │ ├── frontend/ # Cenários de teste para o Frontend
- │ └── api/ # Cenários de teste para a API
- ├── fixtures/ # Dados de teste (JSON)
- ├── support/ # Comandos customizados e configurações
- cypress.config.js # Configurações do Cypress
- package.json # Dependências do projeto
- README.md # Este arquivo

> **Atenção:** Todos os cenários de teste (frontend e API) estão localizados dentro da pasta `cypress/e2e`.

---

## Como Executar

1. Clone o repositório:
``` 
git clone https://github.com/LaisFFerraz/testeTecnicoNTTData.git
```
2. Navegue até a pasta do projeto:
```
cd NTTDataTeste
```
3. Instale as dependências:
```
npm install
```
4. Execute os testes:
```
npx cypress run
```
5. Abrir interface do Cypress (GUI):
```
npx cypress open
```

---
## Cenários de Teste

### API
1. Listagem de usuários existentes  
2. Criação de novos produtos e validação de resposta  
3. Atualização e exclusão de registros com validação de status  

### Frontend
1. Validação da exibição de produtos cadastrados  
2. Teste de fluxo de login e autenticação  
3. Cadastro de novos usuários e validação de mensagens de sucesso  

## Contato

Desenvolvido por **Lais Ferraz**  
**Nome:** LAIS FELIX FERRAZ NOVAES  
**Cargo:** QUALITY ASSURANCE - QA - Automation  
**Cidade Atual:** Jaboatão dos Guararapes - PE  
**LinkedIn:** [https://www.linkedin.com/in/laisffnovaes/](#)  

Profissional com 7 anos de experiência na área de Qualidade de Software, com foco no setor de Seguradora e Telecomunicações. Especialista em testes manuais e automatizados, além de liderança de equipes e gestão de testes em projetos complexos. Perfil proativo, organizado, comunicativo e extrovertido, apto a colaborar em ambientes dinâmicos e multifacetados.

