<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json"); 
header("Access-Control-Allow-Methods: GET, POST, DELETE, HEAD, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'C:/xampp/htdocs/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/db_conn.php';


if($_SERVER['REQUEST_METHOD']==='GET'){
   
    $sql = "SELECT * FROM fullstackeletro.pedidos";
    $resultado = query($sql);
    $pedidos = [];

    while($row = mysqli_fetch_assoc($resultado)){
        $pedidos[] = $row;
    }


    echo json_encode($pedidos);

} else if($_SERVER['REQUEST_METHOD'] === 'POST') { 

    $nomecliente = $_POST['nomecliente'];
    $endereço = $_POST['endereço'];
    $telefone = $_POST['telefone'];
    $escolhaproduto = $_POST['escolhaproduto'];
    $preço = $_POST['preço'];
    $quantidade = $_POST['quantidade'];
    $valortotal = $_POST['valortotal'];

     
      $sql = "INSERT INTO `fullstackeletro`.`pedidos` (`nomecliente`, `endereço`, `telefone`, `escolhaproduto`, `preço`, `quantidade`, `valortotal` ) VALUES ('$nomecliente', '$endereço', '$telefone', '$escolhaproduto', '$preço', '$quantidade', '$valortotal')";
            
      nonquery($sql);
    


} 



json_encode($pedidos)



?>