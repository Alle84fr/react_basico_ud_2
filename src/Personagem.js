import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Personagem(){

    const {id} = useParams();

    return (

        <>
            <h2>
                Página Personagem
            </h2>

            <p> Id: {id}</p>

            <Link to="/">
                voltar main
            </Link>
        </>

    );
}


export default Personagem;
