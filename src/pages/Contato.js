

import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contatos.css';

export default function Contato() {

    const controleEnvio = async(evento) => {
            
         const dados = new FormData(evento.target);
         const define = {
             method: "POST", 
             body: dados,
         };
          
         const resposta = await fetch('http://localhost/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/API/con_mensagens.php', define);
         const change = await resposta.json();
        
     };

    return (

<Container className="w-100 p-4 mx-auto bg-light bg-secondary rounded shadow-sm text-center">
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

   
<Row>

    
<div className="p-4 rounded col-lg-6 col-md-6 mx-auto bg-lg bg-light bg-secondary shadow">
<Form onSubmit={controleEnvio}>
   <h3>Deixe aqui sua mensagem!</h3>
   <Form.Group>
       
       <Form.Label>Nome: </Form.Label>             
       <Form.Control   type="text" id="nome" name="nome" />           
       
   </Form.Group>
   <Form.Group>
       
       <Form.Label>Mensagem: </Form.Label>             
       <Form.Control   type="text" id="msg" name="msg" />           
       
   </Form.Group>
   <Form.Group>
       
       <Form.Label>E-mail: </Form.Label>             
       <Form.Control   type="mail" id="email" name="email" />           
       
   </Form.Group>
   <Form.Group>
       
       <Form.Label>Telefone: </Form.Label>             
       <Form.Control  type="number" id="telefone" name="telefone" />           
       
   </Form.Group>
  
   <Button variant="primary" type="submit" name="enviar">Enviar</Button>
</Form> 
</div>
</Row>
      
</Container>
    )
}