import React from "react";
import { useParams } from "react-router-dom";

function Personagem(){

    const {id} = useParams();

    return (

        <>
            <h2>
                Página Personagem
            </h2>

            <p> Id: {id}</p>
        </>

    );
}


export default Personagem;
