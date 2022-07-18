import React from "react";

function BarraFinal(props) {
    return (
        <div class="barraInferior">
            <ion-icon name={props.name}></ion-icon>
        </div>
    );
}

export default function BarraInferior() {
    return (
        <div class="inferior">
            <BarraFinal name="home"/>
            <BarraFinal name="search-outline"/>
            <BarraFinal name="add-circle-outline"/>
            <BarraFinal name="heart-outline"/>
            <BarraFinal name="person-outline"/>
        </div>
    );
}