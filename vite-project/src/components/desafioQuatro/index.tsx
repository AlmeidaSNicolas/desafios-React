

type DesafioQuatroProps = {
    nome: string,
    cargo: string,
    empresa: string
}

export function DesafioQuatro({nome, cargo, empresa}: DesafioQuatroProps){
    return(
        <>
        <ul>
            <p> Me chamo {nome} </p>
            <p>Trabalho como {cargo}</p>
            <p> na {empresa}</p>
        </ul>
        </>
    )
}

export default DesafioQuatro;