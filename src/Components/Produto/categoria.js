
import { Row, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Categoria(props) {

   
    return (

    
    <Row>
        <ListGroup className="list-group-horizontal">
        <ListGroupItem className=" bg-light bg-secondary" >Fogões</ListGroupItem>
        <ListGroupItem className="bg-light bg-secondary" >Geladeiras</ListGroupItem>
        <ListGroupItem className=" bg-light bg-secondary" as={Link} href="/" to="/">Micro-ondas</ListGroupItem>
        <ListGroupItem className="bg-light bg-secondary" as={Link} href="/" to="/">Lava-Louças</ListGroupItem>
        <ListGroupItem className=" bg-light bg-secondary" as={Link} href="/" to="/">Lavadoras</ListGroupItem>
        <ListGroupItem className=" bg-light bg-secondary" as={Link} href="/" to="/">Aspiradores de pó</ListGroupItem>


        </ListGroup>
    </Row>
    
    )

}