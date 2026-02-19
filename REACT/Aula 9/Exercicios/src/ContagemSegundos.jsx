import { useState, useEffect } from "react";

function Temporizador() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSegundos(prev => prev + 1);
        }, 1000);

        // limpeza do efeito
        return () => clearTimeout(timer);

    }, [segundos]);

    return (
        <h2>Segundos: {segundos}</h2>
    );
}

export default Temporizador;