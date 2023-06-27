function logar(){

    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    
    let dados = [
                    { "id": Date.now(),"nome": "gi","senha": 12345 }, //0
                    { "id": Date.now(),"nome": "brian","senha": 54321 }, //1
                    { "id": Date.now(),"nome": "professor","senha": 22222 } //2
                ]
                 
    for(let i=0;dados.length > i;i++){
    if(nome == dados[i].nome && senha == dados[i].senha){
        alert("Está logado!");
        setTimeout(function() {
            window.location.href = "principal.html";
        });
        break
    } else{
        alert("Usuário ou senha inválidos!");   
        break
    }
    }
    
    }
    
    