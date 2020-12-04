import { Container, Row, Col } from 'react-bootstrap';
import './lojas.css';

export default function Lojas() {
    return (
    
<Container className="w-75 p-4 mx-auto">

     <Row className="p-1 rounded text-center shadow fundo letras">
          <Col>
            <div>
                 <h4>Rio de Janeiro</h4>
                 <p>Presidente Vargas, 1234 </p>
                 <p>10&ordm; andar</p> 
                 <p>Centro </p>
                 <p>(21) 2222-2222 </p>
            </div>
          </Col>
          <Col>
            <div>
                 <h4>São Paulo</h4>
                 <p>Avenida Paulista, 4561</p>
                 <p>4&ordm; andar</p> 
                 <p>Bela Vista</p>
                 <p>(11) 2222-4444 </p>
            </div>   
          </Col> 
          <Col>
            <div>
            <h4> Belo Horizonte</h4>
                 <p>Rua dos Tupinambás, 335</p>
                 <p> 2&ordm; andar </p>
                 <p> Centro</p>
                 <p>(31) 1234-2222 </p>
            </div>
          </Col>
     </Row> 
</Container>
    )
}