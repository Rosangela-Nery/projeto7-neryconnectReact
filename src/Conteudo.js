import React from "react";

function Posts(props) {
  return (
    <div class="conteudo1">
              <div class="topico">
                <div class="topico1">
                  <div class="foto">
                    <img src={props.imagem}/>
                  </div>
                  <div class="parag1">
                    <p class="f1">{props.paragrafo}</p>
                  </div>
                </div>
                <div class="topico2">
                  <p class="f1">...</p>
                </div>
              </div>
              <div class="imag">
                <img src={props.poster}/>
              </div>
              <div class="barra">
                <div class="barra1">
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="barra2">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
              <div class="info">
                <div class="info1">
                  <img src={props.perfil_Que_Curtiu}/>
                </div>
                <div class="info2">
                  <p class="f2">
                    Curtido por <strong class="negrito">{props.perfil}</strong> e
                    <strong class="negrito">{props.quantidade_de_curtidas}</strong>
                  </p>
                </div>
              </div>
          </div>
  );
}

export default function Conteudo() {
    return (
      <div class="conteudo">
        <Posts imagem="./imagens/livros.png" paragrafo="livros" poster="./imagens/1.png" perfil_Que_Curtiu="./imagens/trabalho.png" perfil="trabalho" quantidade_de_curtidas=" outras 101.523 pessoas" />

        <Posts imagem="./imagens/meditacao.png" paragrafo="meditação" poster="./imagens/2.png" perfil_Que_Curtiu="./imagens/familia.png" perfil="familia" quantidade_de_curtidas=" outras 99.143 pessoas" />

        <Posts imagem="./imagens/viagens.png" paragrafo="viagens" poster="./imagens/3.png" perfil_Que_Curtiu="./imagens/Filmes.png" perfil="filmes" quantidade_de_curtidas=" outras 205.103 pessoas" />

        <Posts imagem="./imagens/Filmes.png" paragrafo="filmes" poster="./imagens/4.png" perfil_Que_Curtiu="./imagens/musicas.png" perfil="musicas" quantidade_de_curtidas=" outras 89.905 pessoas" />

        <Posts imagem="./imagens/familia.png" paragrafo="família" poster="./imagens/5.png" perfil_Que_Curtiu="./imagens/tarefas.png" perfil="tarefas" quantidade_de_curtidas=" outras 180.809 pessoas" />
      </div>
    );
}