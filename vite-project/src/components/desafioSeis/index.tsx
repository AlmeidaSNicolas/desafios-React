import { useState } from "react"


export function DesafioSeis(){

    const [area, setArea] = useState(false)

    

    return(
        <>
            <p>Area secreta</p>

                           {/* {condição ? "O que mostrar se for TRUE" : "O que mostrar se for FALSE"} */}
            <button onClick={ () => setArea(!area) }   > { area ? "Ocultar" : 'Mostrar'}  </button>

            {area && <p>Parabéns, você encontrou a área secreta!</p>}
        
        </>
    )
}