import Filme from "./Filmes"
import PropsChildren from "./propsChildren"
import Doces from "./Doces";

// FORMA ESTÁTICA DE CHAMAR COMPONENTES PASSANDO PROPS
// function App() {

//     return (
//         <div>
//             <Filme genero="Comédia" titulo="O meme do mal"/>
//             <Filme genero="Ação" titulo="Top Gun"/>
//             <Filme genero="Drama" titulo="A paixão de Cristo"/>
//         </div>
//     )
// }

// FORMA DINÂMICA DE CHAMAR COMPONENTES PASSANDO PROPS
// function App() {

//     let filmes = [
//         {genero: "Comédia", titulo: "O meme do mal"},
//         {genero: "Ação", titulo: "Top Gun"},
//         {genero: "Drama", titulo: "A paixão de Cristo"}
//     ];

//     let componentesFilmes = []

//     for (const filme of filmes) {
//         componentesFilmes.push(<Filme titulo={filme.titulo} genero={filme.genero}/>)
//     }

//     return componentesFilmes;
// }

// PROPS ESPECIAIS / CHILDREN
// function App() {
//     return <PropsChildren>Este é o conteúdo entre tags.</PropsChildren>
// }

// COMPONENTES DE CLASS

// class App extends React.Component{
//     render() {
//         // return <p>Temos o nosso class-component</p>

//         return(
//             <div>
//                 <Filme genero="Comédia" titulo="O meme do mal"/>
//                 <Filme genero="Ação" titulo="Top Gun"/>
//                 <Filme genero="Drama" titulo="A paixão de Cristo"/>
//             </div>
//         )
//     };
// }

function App() {
    return(
        <div>
            <Doces nome="Fini"/>
            <Doces nome="Pé de Muleque"/>
            <Doces nome="Chiclete"/>
            <Doces nome="Bala"/>       
        </div>
    )
}

export default App;