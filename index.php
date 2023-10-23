<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/INI.css" rel="stylesheet" type="text/css" />
    <title>Document</title>
</head>
<body>
    <?php
       if(isset($_SESSION['user_logado'])){
        require_once './TelaHome.php';
       }
       else{
        require_once './TelaInicio.php';
       }
    ?>
</body>
</html>