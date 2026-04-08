import { useState } from "react"


export function DesafioSeis(){

    const [area, setArea] = useState(false)

    

    return(
        <>
            <p>Area secreta</p>

        
            <button onClick={() => setArea(!area)}   >Clique aqui para encontrar a área secreta  </button>

            {area && <p>Parabéns, você encontrou a área secreta!</p>}
        
        </>
    )
}