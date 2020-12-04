//Produtos contidos dentro da página de produtos

import './produto.css'

export default function Produto(props) {

    function show_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "visible";
    }

    function hide_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "hidden";
    }

    return (

        <figure className ={props.categoria + "produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} 
        onMouseOver={show_info} onMouseOut={hide_info}>

            <img src={require(`./${props.imagem}`).default} alt="Imagem do produto" />
            <figcaption>
                <p className="nome-prod">
                    {props.nome}
                </p>
                <p className="preco-prod">
                    R$ {props.precovelho}
                </p>
                <p className="precofinal-prod">
                    R$ {props.preconovo}
                </p>
            </figcaption>
        </figure>
    )
}