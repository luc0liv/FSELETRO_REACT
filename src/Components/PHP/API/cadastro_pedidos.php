<?php

require_once 'C:/xampp/htdocs/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/db_conn.php';

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, DELETE, HEAD, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type: application/json");


$inputJSON = file_get_contents('php://input');
$input= json_decode( $inputJSON ); 
$arr = array("msg", "Funcionando");
echo json_encode($arr);


?>
