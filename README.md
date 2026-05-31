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

<img width="1362" height="602" alt="image" src="https://github.com/user-attachments/assets/c2fed6c6-af27-4b42-98ee-ac9bbcc2c528" />

---

### Tela de atendimento

Permite chamar as senhas geradas pra atendimento, ainda sem obedecer ordem de prioridade e finalizar os atendimentos até a próxima sessão. Atualmente ainda não possui controle de prioridade.

<img width="1361" height="605" alt="image" src="https://github.com/user-attachments/assets/19f941ed-6da6-476f-9971-428a8b52d0e3" />

---

### Relatórios

Exibe e contabiliza a quantidade de senhas geradas por tipo de atendimento.

<img width="1363" height="600" alt="image" src="https://github.com/user-attachments/assets/15548a7b-bde4-43a2-b485-5f28aa4646b8" />


---

### Exemplo de utilização

Total de senhas contabilizadas após terem sido geradas uma de cada atendimento.

<img width="1365" height="602" alt="image" src="https://github.com/user-attachments/assets/d8390fd4-8068-49ef-a44c-51dbcb3efb72" />

Senhas sendo chamadas para atendimento e histórico.

<img width="1343" height="569" alt="image" src="https://github.com/user-attachments/assets/c2309b28-c16c-4aba-92a8-097ebe0f8b10" />


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
