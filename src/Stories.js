import React from "react";

function SubCaixasStories(props) {
  return (
      <div className="caixaDentroDoStories">
          <img src={props.img} />
          <p className="p">{props.titlie}</p>
      </div>
  );
}

export default function Stories() {

    return (
      <div className="stories">
          <SubCaixasStories titlie="família" img="./imagens/familia.png"/>
          <SubCaixasStories titlie="tarefas" img="./imagens/tarefas.png"/>
          <SubCaixasStories titlie="trabalho" img="./imagens/trabalho.png"/>
          <SubCaixasStories titlie="livros" img="./imagens/livros.png"/>
          <SubCaixasStories titlie="meditação" img="./imagens/meditacao.png"/>
          <SubCaixasStories titlie="viagens" img="./imagens/viagens.png"/>
          <SubCaixasStories titlie="filmes" img="./imagens/Filmes.png"/>
          <SubCaixasStories titlie="música" img="./imagens/musicas.png"/>

          <img className="seta" src="./imagens/seta.png" />

        </div>
    );
}