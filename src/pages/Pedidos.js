import {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';

export default function Pedidos() {
    const [form, setForm] = useState({
        nomecliente: "",
        endereço: "",
        telefone: "",
        preço: "",
        quantidade: "",
        valortotal: ""
    });

    const controleMudanca = (evento) => {
    setForm (
        {
            ...form,
            [evento.target.id]: evento.target.value
        }
        )
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        const valortotal = parseFloat(form.preço) * parseFloat(form.quantidade);
        document.getElementById("valortotal").value = `R$ ${valortotal}`;

        setForm({
            ...form,
            [valortotal]: valortotal
        });

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: json
        }
       
            const resposta = await fetch("http://localhost/recode_aulas/FSELETRO/PHP/API/cadastro_pedidos.php", opcoes);
            const dados = await resposta.json();
            console.log(dados);
        
    }
           
    return (
        
        <Row>
        <div className="p-4 rounded col-lg-6 col-md-6 mx-auto bg-lg bg-light bg-secondary shadow">
       <Form onSubmit={controleEnvio} >
           <Form.Group>
               
               <Form.Label>Nome: </Form.Label>             
               <Form.Control onChange={controleMudanca}  type="text" id="nomecliente" name="nomecliente" />           
               
           </Form.Group>

           <Form.Group>
               
               <Form.Label>Endereço: </Form.Label>             
               <Form.Control  onChange={controleMudanca} type="text" id="endereço" name="endereço"/>           
               
           </Form.Group>

           <Form.Group>
               
               <Form.Label>Telefone: </Form.Label>             
               <Form.Control onChange={controleMudanca}  type="text" id="telefone" name="telefone" />           
              
           </Form.Group>

           <Form.Group>
               
               <Form.Label>Nome do produto: </Form.Label>             
               <Form.Control onChange={controleMudanca} type="text" id="nomeproduto" name="nomeproduto"/>           
               
           </Form.Group>

           <Form.Group>
               
               <Form.Label>Preço: </Form.Label>             
               <Form.Control onChange={controleMudanca} type="text" id="preço" name="preço" />           
           
           </Form.Group>

           <Form.Group>
              
               <Form.Label>Quantidade: </Form.Label>             
               <Form.Control onChange={controleMudanca} type="text" id="quantidade" name="quantidade" />           
           
           </Form.Group>

           <Form.Group>
              
               <Form.Label>Valor total: </Form.Label>             
               <Form.Control disabled type="text" id="valortotal" name="valortotal" />           
           
           </Form.Group>
           <Button variant="primary" type="submit" name="enviar">Enviar</Button>
       </Form> 
       </div>
       </Row>
       

      
    )
}