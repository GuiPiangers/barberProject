# BarberStyle

https://barber-project-e7916.web.app

## Sobre o projeto

A BarberStyle foi a minha primeira aplicação desenvolvida completamente idependente em React Js. 

O projeto consiste em um sistema de agendamentos para uma barbearia.

O projeto conta com:
-Landing Page
-Formulário de Login e Cadastro
-Autentificação com Google
-Criar, editar e excluir agendamentos

## Tecnologias utilizadas
- CSS
- JavaScript
- React JS
- Firestore Database
- Firebase Authentication

# Como executar o projeto

## Back end
Pré-requisitos: Conta no Google

- Crie um projeto no Firebase
- Adicione Firestore Database ao projeto
- Copie e cole as informações do projeto para o arquivo na pasta scr/logic/firebase/config/app.js
  exemplo:
```bash
const firebaseConfig = {
  apiKey: "Sua apikey",
  authDomain: "barber-project.firebaseapp.com",
  projectId: "barber-project",
  storageBucket: "barber-project.appspot.com",
  messagingSenderId: "7293385165",
  appId: "1:7293385165:web:9e8a52a7d282d1dd7502"
}
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/GuiPiangers/barberProject

# entrar na pasta do projeto front end web
cd barberProject

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor

Guilherme Eduardo Martins Piangers

https://www.linkedin.com/in/guilherme-piangers

