<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>SF Athletic - Login</title>
  <link href="css/Home.css" rel="stylesheet" type="text/css" />
</head>

<body>

    <div class="header">
        <img src="imagens/1.png">
        <h1>sf athletic</h1>
        <div class="mh">
          <input type="text" name="pesquisar" id="pesquisar" class="InputUser" placeholder="Pesquisar" required>
        </div>
    </div>

<!---------------------------------------------------------------------------------------------------------->

  <div class="container">
    <div class="MENU">
      <div class="navg">
        <ul>
          <li class="lista active">
            <a href="TelaHome.html">
              <span class="icon"><ion-icon name="home-sharp"></ion-icon></span>
              <span class="title">Home</span>
            </a>
          </li>
    
          <li class="lista">
            <a href="TelaPerfil.html">
              <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
              <span class="title">Perfil</span>
            </a>
          </li>
    
          <li class="lista">
            <a href="index.3.html">
              <span class="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
              <span class="title">Ajuda</span>
            </a>
          </li>
    
          <li class="lista">
            <a href="TelaInicio.html">
              <span class="icon"><ion-icon name="enter-outline"></ion-icon></span>
              <span class="title">Logout</span>
            </a>
          </li>
        </ul>
    
      </div>
    
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    
      <script>
    
        const list = document.querySelectorAll('.list');
        function activeLink(){
          list.forEach((item) =>
          item.classlist.add.remove('active'));
          this.classlist.add('active');
        }
    
        list.forEach((item) =>
        item.addEventListener('click',activeLink));
        
      </script>
    </div>

    <div class="ctn">
      <div class="conteudo">

      </div>
    </div>

  </div>
    
<!------------------------------------------------------------------------------------------------------------->

</body>

</html>