
import {Container, Row, Col} from 'react-bootstrap';
import './contatos.css';

export default function Contato() {
    return (
<Container className="w-50 p-4 mx-auto bg-light bg-secondary rounded shadow-sm text-center">
   <Row>
    <Col>
        <img src={require(`./imagens/emailicon.jpg`).default} width="40px" alt="icone email"/>
         <p>contato@fullstackeletro.com</p>   
       
    </Col>

    <Col>
          <img src={require(`./imagens/whapicon.png`).default} width="40px" alt="whatsapp icone" />  
         <p>(21) 92323-6589</p>
    </Col>

  </Row>
</Container>
      

    )
}