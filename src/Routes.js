import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Personagem from "./Personagem";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/personagem/:id" element={<Personagem />}/>
                <Route path="/cenario/:id" element={<Cenario />}/>
                <Route path="/conto/:id" element={<Conto />}/>
                // adiconado novas rotas, estas são só exemplo
            </Routes>
        </BrowserRouter>
    )
}
