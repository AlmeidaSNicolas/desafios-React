import { useEffect, useState } from "react"

export default function DesafioTres(){
    
    const [pesquisa, setPesquisa] = useState("");
    const [listaUsuarios, setListaUsuarios] = useState<string[]>([]);

    useEffect(() => {
        if(pesquisa.length > 3){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => {
                    const nomes = data.map((user: { name: string }) => user.name);
                    setListaUsuarios(nomes);
                })
        }
    }, [pesquisa]);



    return(
        <div>

            <h1>Desafio 3</h1>

            <input type='text'placeholder="Digite um nome"value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
             />
            
            <ul>
                {listaUsuarios.map((nome, index) =>(
                    <li key={index}>{nome}</li>
                ))}
            </ul>

        </div>
    )
}
