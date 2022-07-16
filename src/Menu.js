import React from "react";

export default function Menu() {
    return (
        <div class="menu">
            <div class="men">
                <div class="menu1">
                    <img
                        class="iconeConectar"
                        src="./imagens/conectar.png"
                        width="20px"
                        height="20px"
                    />
                    <img
                        class="logo"
                        src="./imagens/logo.png"
                        width="130px"
                        height="130px"
                    />
                </div>

                <div class="menu2">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="menu3">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}