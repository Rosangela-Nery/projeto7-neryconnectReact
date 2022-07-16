import React from "react";

export default function Conteudo() {
    return (
        <div class="conteudo1">
              <div class="topico">
                <div class="topico1">
                  <div class="foto">
                    <img src="./imagens/livros.png" />
                  </div>
                  <div class="parag1">
                    <p class="f1">livros</p>
                  </div>
                </div>

                <div class="topico2">
                  <p class="f1">...</p>
                </div>
              </div>
              <div class="imag">
                <img src="./imagens/1.png" />
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
                  <img src="./imagens/trabalho.png" />
                </div>
                <div class="info2">
                  <p class="f2">
                    Curtido por <strong class="negrito">trabalho</strong> e
                    <strong class="negrito">outras 101.523 pessoas</strong>
                  </p>
                </div>
              </div>
            </div>
    );
}