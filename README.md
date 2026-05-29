# MobileTicketsIonic
Este projeto visa a pratica do desenvolvimento mobile com o Ionic, utilizar conceitos de Angular e simular um sistema real de gerenciamento de filas.

## MobileTicketsIonic
Aplicação mobile desenvolvida com Ionic + Angular para gerenciamento de senhas de atendimento (geral, prioritária e exames).

---

## Tecnologias utilizadas

- Ionic Framework
- Angular
- TypeScript
- HTML / CSS

---

## Funcionalidades

- Gerar senha geral
- Gerar senha prioritária
- Gerar senha de exame
- Controle de quantidade das senhas geradas
- Chamada de senhas para atendimento
- Relatório de senhas emitidas

---

## Interface

### Página inicial

Página onde é possível escolher o tipo de senha que quer solicitar, apenas clicando no botão ele já gera e mostra a senha.

<img width="1365" height="721" alt="Captura de tela 2026-04-05 204048" src="https://github.com/user-attachments/assets/c89cc3e6-d72e-4c4b-8f8b-074211b84cfd" />

---

### Tela de atendimento

Permite chamar as senhas geradas pra atendimento, ainda sem obedecer ordem de prioridade e finalizar os atendimentos até a próxima sessão. Atualmente ainda não possui controle de prioridade.

<img width="1361" height="605" alt="image" src="https://github.com/user-attachments/assets/19f941ed-6da6-476f-9971-428a8b52d0e3" />

---

### Relatórios

Exibe e contabiliza a quantidade de senhas geradas por tipo de atendimento.

<img width="1363" height="602" alt="Captura de tela 2026-04-05 204112" src="https://github.com/user-attachments/assets/948123dc-5262-4a4d-af36-b991b185d242" />

---

### Exemplo de utilização

Total de senhas contabilizadas após terem sido geradas uma de cada atendimento.

<img width="1365" height="725" alt="Captura de tela 2026-04-05 204134" src="https://github.com/user-attachments/assets/65829eb6-567c-4bbc-972d-151570e7aa1f" />

---

## Pré requisitos

- Node.js 18 ou superior
- npm
- Ionic CLI

---

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/MatheusWashington/MobileTicketsIonic.git
```

### 2. Acesse a pasta do projeto

```bash
cd MobileTicketsIonic
```

### 3. Instale dependências

```bash
npm install
````

### 4. Instale o Ionic CLI globalmente

```bash
npm install -g @ionic/cli
```

### 5. Execute o projeto

```bash
Ionic serve
```

---

A aplicação será iniciada em:

```text
http://localhost:8100
```

## Autor

Desenvolvido por **Matheus Washington**
GitHub: https://github.com/MatheusWashington

---

## Este projeto está sob a licença MIT.
