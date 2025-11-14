function adicionarTarefa(){
    //recebe o valor do input do usuário
    let coloqueAlista = document.getElementById
    ("coloqueAlista")
    let tarefa = coloqueAlista.value

    //cria novo item (li) e insere na (lista ul)
    let listaTarefa = document.getElementById
    ("listaTarefa")
    let novaTarefa = document.createElement("li")
    novaTarefa.textContent = tarefa
    listaTarefa.appendChild(novaTarefa)
    
   
   
    //mensagem de Tarefa adicionada com sucesso
   
    let mensagem = "Tarefa adicionada com suceso!"
    document.getElementById("mensagem"). textContent =
    mensagem
   
    //limpa o input do usuario
    coloqueAlista.value = ""
}