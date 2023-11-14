async function createParseUsuarios() {
    let sexo = '';
    if($("#feminino").is(":checked"))
      sexo = 'feminino';
    else if($("#masculino").is(":checked"))
      sexo = 'masculino';
    else
      sexo = 'outros';

    let tipoConta = "olheiro";
    if($("#atleta").is(":checked"))
      tipoConta = 'atleta';

      let Usuarios = new Parse.Object('Usuarios');
      Usuarios.set("nome", document.getElementById("nome").value);
      Usuarios.set("email", document.getElementById("email").value);
      Usuarios.set("telefone", document.getElementById("telefone").value);
      Usuarios.set("data_nasc", document.getElementById("data_nascimento").value);
      Usuarios.set("cidade", document.getElementById("cidade").value);
      Usuarios.set("estado", document.getElementById("estado").value);
      Usuarios.set("esporte", document.getElementById("esporte").value);
      Usuarios.set("sexo", sexo);
      Usuarios.set("tipo_conta", tipoConta);
      Usuarios.set("senha",document.getElementById("senha").value)
      Usuarios.set("time",document.getElementById("t-esporte").value)
      console.log(Usuarios)
      try {
        Usuarios = await Usuarios.save();
        if (Usuarios !== null) {
          alert(
            `New object created with success! ObjectId: ${
              Usuarios.id
            }, ${Usuarios.get("Usuarios")}`
          );
        }
      } catch (error) {
       console.log(error)
      }
    // const myNewObject = new Parse.Object('Usuarios');
    // myNewObject.set('nome', 'dfdsfsdfdsfdsfsdfdsfdsfsdf');
    // myNewObject.set('email', 'A string');
    // myNewObject.set('telefone', 'A string');
    // myNewObject.set('data_nascimento', new Date());
    // myNewObject.set('cidade', 'A string');
    // myNewObject.set('estado', 'A string');
    // myNewObject.set('esporte', 'A string');
    // myNewObject.set('sexo', 'A string');
    // myNewObject.set('tipo_conta', 'A string');
    // myNewObject.set('senha', 'A string');
    // myNewObject.set('time', 'A string');
    // try {
    //   const result = await myNewObject.save();
    //   // Access the Parse Object attributes using the .GET method
    //   console.log('Usuarios created', result);
    // } catch (error) {
    //   console.error('Error while creating Usuarios: ', error);
    // }
}

document.getElementById("btn-cadastrar").addEventListener("click", async function () {
createParseUsuarios();
    
});

function abrir(id){
    document.getElementById('popup').style.display = "flex";
    document.getElementById('main-login').style.position = "fixed";
    document.getElementById('h').style.position = "fixed";
}

function fechar(id){
    document.getElementById(id).style.display = "none";
    document.getElementById('main-login').style.position = "initial";
    document.getElementById('h').style.position = "initial";
}