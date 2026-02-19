import {useState} from "react"

function App() {
    const [pagina, setPag] = useState(1) 

    function MaisPag() {
        if (pagina < 10) {
            setPag(pagina + 1);
        }
    }

    function MenosPag() {
        if (pagina > 1) {
            setPag(pagina - 1);
        }
    }

    return (
        <>  
            <p>
                <button onClick={MenosPag} disabled={pagina === 1}>
                    -
                </button>
                {pagina}
                <button onClick={MaisPag} disabled={pagina === 10}>
                    +
                </button>
            </p>
        </>
    )
} 

export default App