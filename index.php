<?php
    session_start();
    if(isset($_POST['btnLogout'])){
        unset($_SESSION['user_logado']);
    }
    if(isset($_POST['btnLogin'])){
        $userLogado = new stdClass();
        $userLogado->user = $_POST["usuario"];
        $userLogado->senha = $_POST["senha"];
 
     if($userLogado->user == "admin@gmail.com"){
         if($userLogado->senha == "123456"){
             $_SESSION['user_logado'] = serialize($userLogado);
         }
     }
    }
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
        require_once './TelaHome.html';
       }
       else{
        require_once './TelaInicio.php';
       }
    ?>
</body>
</html>