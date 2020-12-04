import {Switch, Route} from 'react-router-dom';
import Produtos from './pages/produtos.js';
import Pedidos from "./pages/Pedidos.js";
import Lojas from './pages/Lojas.js';
import Contato from './pages/Contato.js';
import Inicial from './pages/Inicial.js';


function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/inicial" component={Inicial} />

   
        </Switch>
    )
}

export default Rotas;