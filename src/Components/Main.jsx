import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    return(
        <main>
            <label>seu nome:</label>
            <form>
            <input
            type="text"
            name="nome-contato"
            id="nome"
            value={nome}
            onChange={
                (event) => setNome(event.target.value)
              }
            />
            {nome}
            <label>seu telefone:</label>
            <input
            type="tel"
            name="telefone"
            id="nome"
            value={telefone}
            onChange={
                (event) => setNome(event.target.value)
              }
            />
              {telefone}

            

            </form>
        </main>
    )
}