<?php
header("Access-Control-Allow-Origin:*"); 
header("Content-type: application/json"); 
require_once 'C:/xampp/htdocs/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/db_conn.php';


if($_SERVER['REQUEST_METHOD']==='GET'){
   
    $sql = "SELECT * FROM fullstackeletro.contato";
    $resultado = query($sql);
    $contato = [];

    while($row = mysqli_fetch_assoc($resultado)){
        $contato[] = $row;
    }


    echo json_encode($contato);

} else if($_SERVER['REQUEST_METHOD'] === 'POST') { 

    $nome = $_POST['nome'];
    $msg = $_POST['msg'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
     
      $sql = "INSERT INTO `fullstackeletro`.`contato` (`nome`, `msg`, `email`, `telefone`) VALUES ('$nome', '$msg', '$email', '$telefone')";
            
      nonquery($sql);
    


} 

?>