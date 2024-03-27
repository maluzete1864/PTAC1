import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    const [listaContatos, setContatos] = useState([]);

  const registrar = (event) => {
    event.preventDefault();
    alert("Deu certo!");
    setContatos([...listaContatos,
    {
      nomeSalvo: nome,
      telefoneSalvo:telefone
    }
    ]);
  }
  console.table(listaContatos);
    return(
        <main>
            <label htmlFor="nome">Nome:</label>
            <form onSubmit={registrar}>
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
            <label htmlFor="telefone">Telefone:</label>
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