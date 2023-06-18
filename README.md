# BarberStyle

https://barber-project-e7916.web.app

## Sobre o projeto

Big Game Survey é uma aplicação full stack web e mobile construída durante a 1ª edição da **Semana DevSuperior** (#sds1), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em uma pesquisa de preferência de games, onde os dados são coletados no app mobile, e depois são listados no app web, que também apresenta um dashboard com gráficos baseados nestes dados.

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
- copie e cole as informações do projeto para o arquivo na pasta scr/logic/firebase/config/app.js
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

