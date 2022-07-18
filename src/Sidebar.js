function GaleriaSidebar (props) {
  return (
    <div className="sidebar">

          <div class="perfilSugerido">
            <div class="fotoENomeDoPerfilSugerido">
              <div class="fot">
                <img src={props.fotoDoPerfil} />
              </div>
              <div class="name">
                <h4>{props.nomeDoPerfil}</h4>
                <p>Segue você</p>
              </div>
            </div>
            <div class="seguir">
              <h5>Seguir</h5>
            </div>
          </div>

        </div>
  );
}

export default function Sidebar() {

    let itensDoSidebar = [
      {fotoDoPerfil: "./imagens/foto2.png", nomeDoPerfil: "sakura_gh.23"},
      {fotoDoPerfil: "imagens/foto3.png", nomeDoPerfil:"driven"},
      {fotoDoPerfil: "imagens/foto4.png", nomeDoPerfil:"Kay.002"},
      {fotoDoPerfil: "imagens/foto5.png", nomeDoPerfil:"respondeaí"},
      {fotoDoPerfil: "imagens/foto6.png", nomeDoPerfil: "thamy.ys.89"}
    ]

    return (
        <div className="galeria2">

          <div class="perfilPessoal">
            <div class="foto">
              <img src="./imagens/foto1.png" />
            </div>
            <div class="nome">
              <h6>rosangela_nery</h6>
              <p>Rosa🌹</p>
            </div>
          </div>


          <div class="caixa">
            <div class="caix">

              <div class="sugestaoDePerfil">
                <div class="a1">
                  <h3>Sugestão para você</h3>
                </div>
                <div class="b1">
                  <h6>Ver tudo</h6>
                </div>
              </div>

              {itensDoSidebar.map((itens) => <GaleriaSidebar fotoDoPerfil={itens.fotoDoPerfil} nomeDoPerfil={itens.nomeDoPerfil}/>)}

            </div>
          </div>

          <div class="descricao">
            <p>
              Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras
              &bull; Privacidade &bull; Termos &bull; Localizações &bull; Contas
              mais relevantes &bull; Hashtags &bull; Idioma
            </p>
            <br />
            <br />
            <p>&copy; 2021 INSTAGRAM DO FACEBOOK</p>
          </div>
        </div>
    );
}