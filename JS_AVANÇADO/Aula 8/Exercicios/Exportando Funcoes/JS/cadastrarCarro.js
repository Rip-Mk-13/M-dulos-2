import { postCarro } from "../service/carrosService";

const cadastro = async () => {
    let cadastro = await postCarro();

    let cadastrar = await fetch("http://localhost:3000/pessoa", {
        method: 'POST',
        body: JSON.stringify({
            
        })
    });
}