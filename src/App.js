import Rotas from './rotas';
import Menu from './Components/Menu';
import Footer from './Components/Footer/rodape.js'
import {BrowserRouter } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';


function App() {
    return (
        <BrowserRouter>
        <div className = "App">
         <header> 
        <Menu />
</header>  
<main>
    <Container fluid>
       <Rotas /> 
    </Container>
</main>
<footer>
    <div>
        <Footer />
    </div>
</footer>
        </div>
   </BrowserRouter>
    );
}

export default App;