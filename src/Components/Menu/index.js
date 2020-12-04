import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import './Menu.css';

 function BaseMenu(props) {
     const { location } = props
    return (
   <Navbar className="navbar-dark fundo" expand="lg" fixed="top">
       <Navbar.Brand as={Link} href="/inicial" to="/inicial">
                  <img src={require(`./marca.png`).default} width ="135px" alt="Logo"/>   
       </Navbar.Brand>

       <Navbar.Toggle aria-controls="item-menu" />
       <Navbar.Collapse id="item-menu">
           <Nav activeKey={location.pathname} className="ml-auto mr-3">
           <Nav.Item>
                   <Nav.Link as={Link} href="/inicial" to="/inicial" className="text-info">Página Inicial</Nav.Link>
               </Nav.Item> 
               <Nav.Item>
                   <Nav.Link as={Link} href="/produtos" to="/produtos" className="text-info">Produtos</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link as={Link} href="/pedidos" to="/pedidos" className="text-info">Pedidos</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link as={Link} href="/lojas" to="/lojas" className="text-info" >Nossas Lojas</Nav.Link>
               </Nav.Item>
               <Nav.Item>
                   <Nav.Link as={Link} href="/contato" to="/contato" className="text-info">Fale Conosco</Nav.Link>
               </Nav.Item>
           </Nav>
       </Navbar.Collapse>
   </Navbar>
    )
    }

const Menu = withRouter(BaseMenu);

 
 export default Menu;