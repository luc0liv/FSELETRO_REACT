<?php

require_once 'C:/xampp/htdocs/recode_aulas/FSELETRO/projetos/fullstackeletro/src/Components/PHP/db_conn.php';

$result = query("SELECT * FROM produtos");
$produtos = [];

while($row = mysqli_fetch_assoc($result)){
    $produtos[] = $row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($produtos);

?>