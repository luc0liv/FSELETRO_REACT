<?php

require_once 'C:/xampp/htdocs/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/db_conn.php';

$result = query("SELECT * FROM produto_categoria");
$produto_categoria = [];

while($row = mysqli_fetch_assoc($result)){
    $produto_categoria[] = $row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($produto_categoria);

?>