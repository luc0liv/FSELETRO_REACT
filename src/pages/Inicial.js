import {Container, Jumbotron, Button} from 'react-bootstrap';

export default function Inicial() {
    return (

        <Container>
          <Jumbotron className="text-center">
<div>
<h1>Bem vindo(a)!</h1>
<hr />
  <p>
    Somos uma loja de eletrônicos com descontos especiais para pessoas programadoras. 
  </p>
  <p>
    <Button variant="primary" href="/produtos">Boas compras!</Button>
  </p>
</div>
         </Jumbotron>
        </Container>
      
    )
}