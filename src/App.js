import Button from "./component/Button/indexButton";
import { Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
        <h1>Ferramentas de padronização de código</h1>

        <Button>
            BTN
        </Button>
        <br></br>
        <Link to="/personagem/1">
            Como uma tag a no html
        </Link>
    </div>
  );
}

export default App;
