import { useEffect, useState } from "react";

function Quadrado() {
    const [quadrado, setQuadrado] = useState(1)

    const quadradoNumero = () => {
        setQuadrado(numero * numero)
    }
    
// PARA CRIAÇÃO
    // useEffect(() => {
    //     quadradoNumero()
    // })

// PARA EDIÇÃO
    useEffect(() => {
        quadradoNumero();
    },[numero])

    return(
        <p>O quadrado do número {numero} é {quadrado}</p>
    )
}

export default Quadrado;