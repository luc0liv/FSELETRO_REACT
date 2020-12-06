import {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';

export default function Pedidos() {
    
    
    const [form, setForm] = useState({
        nomecliente: "",
        endereço: "",
        telefone: "",
        escolhaproduto: "",
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
        document.getElementById("valortotal").value = `${valortotal}`;

        setForm({
            ...form,
            valortotal: valortotal
        })

            const dados = new FormData(evento.target);
            const define = {
                method: "POST", 
                body: dados,
            };
             
            const resposta = await fetch('http://localhost/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/API/con_pedidos.php', define);
            const change = await resposta.json();
    }
           

      return (
        
        <Row>
        <div className="p-4 rounded col-lg-6 col-md-6 mx-auto bg-lg bg-light bg-secondary shadow">
       <Form onSubmit={controleEnvio}>
           <h3>Faça seu pedido!</h3>
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
               <Form.Control onChange={controleMudanca}  type="number" id="telefone" name="telefone" />           
              
           </Form.Group>

           <Form.Group>
               
               <Form.Label>Nome do produto: </Form.Label>             
               <Form.Control onChange={controleMudanca} type="text" id="escolhaproduto" name="escolhaproduto"/>           
               
           </Form.Group>

           <Form.Group>
               
               <Form.Label>Preço: </Form.Label>             
               <Form.Control  onChange={controleMudanca} type="number" id="preço" name="preço" />           
           
           </Form.Group>

           <Form.Group>
              
               <Form.Label>Quantidade: </Form.Label>             
               <Form.Control onChange={controleMudanca} type="number" id="quantidade" name="quantidade" />           
           
           </Form.Group>

           <Form.Group>
              
               <Form.Label>Valor total: </Form.Label>             
               <Form.Control onChange={controleMudanca} disabled type="number" id="valortotal" name="valortotal" />           
           
           </Form.Group>
           <Button variant="primary" type="submit" name="enviar">Enviar</Button>
       </Form> 
       </div>
       </Row>
       
      
    );
}
