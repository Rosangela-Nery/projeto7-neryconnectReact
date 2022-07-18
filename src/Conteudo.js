import React from "react";

function Posts(props) {

  const [corBotao, setCorBotao] = React.useState("heart-outline");
  function corDoBotao(){
      if(corBotao === "heart-outline") {
        setCorBotao("heart")
      } else{
        setCorBotao("heart-outline")
      }
  }

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
                <img onDoubleClick={() => {if(corBotao === 'heart-outline') {setCorBotao("heart")}}} src={props.poster}/>
              </div>
              <div class="barra">
                <div class="barra1">
                  <ion-icon onClick={corDoBotao} name={corBotao}></ion-icon>
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

    const novoPoster = [
      {imagem: "./imagens/livros.png", paragrafo: "livros", poster: "./imagens/1.png", perfil_Que_Curtiu: "./imagens/trabalho.png", perfil: "trabalho", quantidade_de_curtidas: " outras 101.523 pessoas"},
      {imagem: "./imagens/meditacao.png", paragrafo: "meditação", poster: "./imagens/2.png", perfil_Que_Curtiu: "./imagens/familia.png", perfil: "familia", quantidade_de_curtidas: " outras 99.143 pessoas"},
      {imagem: "./imagens/viagens.png", paragrafo: "viagens", poster: "./imagens/3.png", perfil_Que_Curtiu: "./imagens/Filmes.png", perfil:"filmes", quantidade_de_curtidas: " outras 205.103 pessoas"},
      {imagem: "./imagens/Filmes.png", paragrafo: "filmes", poster: "./imagens/4.png", perfil_Que_Curtiu: "./imagens/musicas.png", perfil: "musicas", quantidade_de_curtidas: " outras 89.905 pessoas"},
      {imagem: "./imagens/familia.png", paragrafo: "família", poster:"./imagens/5.png", perfil_Que_Curtiu: "./imagens/tarefas.png", perfil: "tarefas", quantidade_de_curtidas:" outras 180.809 pessoas"}
    ];

    return (
      <div class="conteudo"> 
        {novoPoster.map((poster) => <Posts imagem={poster.imagem} paragrafo={poster.paragrafo} poster={poster.poster} perfil_Que_Curtiu={poster.perfil_Que_Curtiu} perfil={poster.perfil} quantidade_de_curtidas={poster.quantidade_de_curtidas} />)}
      </div>
    );
}