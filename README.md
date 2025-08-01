<div align="center">
    <h1>GameboXed</h1>   
    <img alt="Logo do projeto" src="./src/assets/logo.png">
    <h3>Uma plataforma de avaliações de jogos, onde Gamers podem dar suas notas e compartilhar sua experiência sobre diversos jogos.</h4>
    <img alt="React" src="https://img.shields.io/badge/REACT-%2361DAFB?style=for-the-badge&logo=REACT&logoColor=%2361DAFB&labelColor=black">
    <img alt="CSS3" src="https://img.shields.io/badge/css-%23663399?style=for-the-badge&logo=css&logoColor=%23663399&labelColor=black">
    <img alt="Docker" src="https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=%232496ED&labelColor=black">
</div>
<div align="center">
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#como-rodar">Como rodar</a> •
  <a href="#créditos">Créditos</a>
</div>

# Vídeos e Capturas de Tela
<details><summary>Mostrar</summary>
    <h2>Visão Geral</h1>
    <a href="https://youtu.be/a3WwV8_MXiI?si=DkYlz2kKf9j0N-SN">Vídeo</a>
    <h2>Início</h1>
    <img alt="Captura de tela do projeto" src="https://i.imgur.com/wcLXn0J.jpeg">
    <h2>Login e Redefinição de senha</h1>
    <a href="https://youtu.be/MgrxG1FmuIY?si=DVXJLIHNrAaroUWo">Vídeo</a>
    <img alt="Captura de tela do projeto" src="https://i.imgur.com/23PHR5w.png">
    <img alt="Captura de tela do projeto" src="https://i.imgur.com/lQ1heBb.png">
    <h2>Pesquisa</h1>
    <img alt="Captura de tela do projeto" src="https://i.imgur.com/6IyyMhQ.png">
    <h2>Página de Jogo</h1>
    <img alt="Captura de tela do projeto" src="https://i.imgur.com/ZU7NclF.png">
    <h2>Menu de Avaliação</h1>
    <img alt="Captura de tela do projeto" src="https://i.imgur.com/wWF4TuD.png">
</details>

## Funcionalidades
- Autenticação completo com login e registro lidando com tokens JWT;
- Redefinição de senha por e-mail;
- Pesquisa de jogos, lidando com paginação;
- Avaliação de jogos, dando uma nota de 0 a 5 e podendo ou não incluir um comentário;
- Listagem das avaliações de um jogo;
- Atualização dinâmica da nota de um jogo após avaliação;
- Possibilidade do usuário logado poder editar ou remover uma avaliação feita por ele;
## Como rodar
Certifique-se de ter o [Docker](https://docs.docker.com/get-started/get-docker/) e Docker Compose instalados.
1. Clone o repositório;
2. No terminal da pasta raiz do projeto, crie a imagem do front-end:
```
docker build -t gameboxed-front:1.0 .
```
3. Clone o [repositório do back-end](https://github.com/paulooosf/gameboxed-back) e siga os passos para a criação de sua imagem;
4. Suba os containers:
```
docker-compose up -d
```
Após a inicialização, o front-end estará disponível em http://localhost:3000
## Créditos
- Paulo Henrique - [paulooosf](http://github.com/paulooosf)
