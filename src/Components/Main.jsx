import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    return(
        <main>
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
        </main>
    )
}