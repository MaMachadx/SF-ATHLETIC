read();

function read() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first().then(function(pet){
        if(pet){
           console.log('Pet found successful with name: ' + pet.get("name") + ' and age: ' + pet.get("agePet"));
        } else {
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
}

// --------------------------------------------------------------------------------------------------------------------------------------

readThenUpdate();

function readThenUpdate() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first().then(function (pet) {
      if (pet) {
        console.log('Pet found with name: ' + pet.get("name") + ' and age: ' + pet.get("agePet"));
        update(pet);
      } else {
        console.log("Nothing found, please try again");
      }
    }).catch(function (error) {
      console.log("Error: " + error.code + " " + error.message);
    });
}

function update(foundPet) {
    textName = "myNameUpdated";
    textAge = 20;
    console.log(textAge);
    foundPet.set('name', textName);
    foundPet.set('agePet', textAge);

    foundPet.save().then(function (pet) {
      console.log('Pet updated! Name: ' + pet.get("name") + ' and new age: ' + pet.get("agePet"));
    }).catch(function(error) {
      console.log('Error: ' + error.message);
    });
}


readThenDelete();

function readThenDelete() {
    query = new Parse.Query(Pet);
    query.equalTo("name", textName);
    query.first().then(function (pet) {
        if (pet) {
            console.log('Pet found with name: ' + pet.get("name") + ' and age: ' + pet.get("agePet"));
            deletePet(pet);
        } else {
            console.log("Nothing found, please try again");
            return null;
        }
    }).catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
        return null;
    });
}

function deletePet(foundPet) {
    foundPet.destroy().then(function(response) {
      console.log('Pet '+ foundPet.get("name") + ' erased successfully');
    }).catch(function(response, error) {
      console.log('Error: '+ error.message);
    });
}