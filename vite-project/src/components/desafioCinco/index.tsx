import { useState } from "react"


export function DesafioCinco(){

    const [numero, setNumero] = useState(0)

    function AumentarNumero(){
        setNumero(numero + 1)
    }

    function DimuniurNumero(){
       setNumero(numero > 0 ? numero - 1 : 0)
    }

    return(
        <>
            <p  style={{height: 'auto', marginTop: '400px'  ,display: 'flex' , justifyContent: 'center', textAlign: 'center' }} > { numero } </p>
            <button onClick={(AumentarNumero)}> Aumentar</button>
            <button onClick={(DimuniurNumero)} style={{ margin: '10px'}} > Diminiur</button>
        </>
    )
}