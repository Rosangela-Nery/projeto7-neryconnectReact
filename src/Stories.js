function SubCaixasStories(props) {
  return (
      <div className="caixaDentroDoStories">
          <img src={props.img} />
          <p className="p">{props.title}</p>
      </div>
  );
}

export default function Stories() {

  let novoItem = [
    {title: "família", img: "./imagens/familia.png"},
    {title: "tarefas", img: "./imagens/tarefas.png"}, 
    {title: "trabalho", img: "./imagens/trabalho.png"},
    {title: "livros", img: "./imagens/livros.png"},
    {title: "meditação", img: "./imagens/meditacao.png"},
    {title: "viagens", img: "./imagens/viagens.png"},
    {title: "filmes", img: "./imagens/Filmes.png"},
    {title: "música", img: "./imagens/musicas.png"}
  ];

    return (
      <div className="stories">
        {novoItem.map((item) => <SubCaixasStories title={item.title} img={item.img}/>)}
        <img className="seta" src="./imagens/seta.png" />
      </div>
    );
}