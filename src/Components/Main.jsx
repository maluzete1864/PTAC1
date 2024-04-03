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
            
            <form onSubmit={registrar}>
            <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            name="nome-contato"
            id="nome"
            value={nome}
            onChange={
                (event) => setNome(event.target.value)
              }
            />
            
            <label htmlFor="telefone">Telefone:</label>
            <input
            type="tel"
            name="telefone"
            id="nome"
            value={telefone}
            onChange={
                (event) => setTelefone(event.target.value)
              }
            />
            <button>Salvar</button>
              
            </form>
            { listaContatos.map((contato, index) =>
              <div key={index}>
                <p> {contato.nomeSalvo}</p>
                <p>{contato.telefoneSalvo}</p>
              </div>
            )}
        </main>
    )
}