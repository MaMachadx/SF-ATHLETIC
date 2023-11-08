async function createParseUsuários() {
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

      let Usuários = new Parse.Object('Usuario');
      Usuários.set("nome", document.getElementById("nome").value);
      Usuários.set("senha", "dfdsfsdf5423535234");
      Usuários.set("email", document.getElementById("email").value);
      Usuários.set("telefone", document.getElementById("telefone").value);
      Usuários.set("data_nascimento", document.getElementById("data_nascimento").value);
      Usuários.set("cidade", document.getElementById("cidade").value);
      Usuários.set("estado", document.getElementById("estado").value);
      Usuários.set("esporte", document.getElementById("esporte").value);
      Usuários.set("sexo", sexo);
      Usuários.set("tipo_conta", tipoConta);
      try {
        Usuários = await Usuários.save();
        if (Usuários !== null) {
          alert(
            `New object created with success! ObjectId: ${
              Usuários.id
            }, ${Usuários.get("Usuáriosname")}`
          );
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
}

document.getElementById("submit").addEventListener("click", async function () {
    createParseUsuários();
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