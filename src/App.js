import {lazy, Suspense} from "react";
//import Rotas from './rotas';
//import Menu from './Components/Menu';
//import Footer from './Components/Footer/rodape.js'
import {BrowserRouter } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';

const Menu = lazy(()=> import ("./Components/Menu"));
const Rotas = lazy(()=> import ("./rotas"));
const Footer = lazy(()=> import ("./Components/Footer/rodape"));

function App() {
    return (
        <BrowserRouter>
        <div className = "App">
         <header> 
       <Suspense fallback={<p>Carregando...</p>}> <Menu /></Suspense>
</header>  
<main>
    <Container fluid>
    <Suspense fallback={<p>Carregando...</p>}><Rotas /> </Suspense>
    </Container>
</main>
<footer>
    <div>
    <Suspense fallback={<p>Carregando...</p>}><Footer /> </Suspense>
    </div>
</footer>
        </div>
   </BrowserRouter>
    );
}

export default App;