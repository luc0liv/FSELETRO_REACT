// página de produtos
import { useState, useEffect} from 'react';
import Produto from '../Components/Produto';
import Categoria from '../Components/Produto/categoria.js'
import { Container, Row, Col} from 'react-bootstrap';


export default function Produtos() {
  const [ produtos, setProdutos] = useState([]);

  useEffect(async() =>{
const resposta = await fetch("http://localhost/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/API/produtos.php")
const dados = await resposta.json()
setProdutos(dados);
  }, []); 


  return (

    <Container>

<Row className="w-75 p-4 mx-auto">
       <Categoria  />
</Row>

      <Row className="bg-light bg-secondary p-4 rounded shadow"> 
        
     
      
        {produtos && produtos.map(item => <Produto key={item.idprodut} imagem={item.nomeimagem} nome={item.nomeproduto} precovelho={item.preço} preconovo={item.preço_venda} categoria={item.aspirador} />)}
    
    

      </Row>

    </Container>
  )

  
}



