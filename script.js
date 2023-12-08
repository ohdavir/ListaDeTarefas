let adicionar = document.getElementById("adicionar");
let ultarefa = document.getElementById("ultarefa");
let input = document.getElementById("camporesultado")
let finalizar = document.getElementById("finalizar");
let limpar = document.getElementById("limpar");
let limpar2 = document.getElementById("limpar2")
let ultarefacompleta = document.getElementById("ultarefacompleta")
let video = document.getElementById("video")
let tudo = document.getElementById("tudo")
let oq = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "e", "i", "o", "u", "comprar"]
function adicionarTarefa() { // função para adicionar uma tarefa

    if (oq.includes(input.value)){
        video.style.display = "block"
        tudo.style.display = "none"
    }
    if (input.value.trim() !== "") { 
        let lista = document.createElement("li"); // cria um ul para a nova tarefa
        lista.innerText = input.value; // texto do ul com o valor do campo de input
        ultarefa.appendChild(lista); // adiciona o li ao container de tarefas pendentes
        input.value = ""; // limpa o valor do campo de input
        input.focus(); // foco de volta ao campo de input
        lista.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no ul
            ultarefa.removeChild(lista);// Remove o ul de tarefas pendentes
            ultarefacompleta.appendChild(lista);// Adiciona o ul a tarefas completas
        });
        finalizar.addEventListener("click", function () { // evento pra finalizar tudo
            ultarefa.removeChild(lista); // remove o ul do de tarefas pendentes
            ultarefacompleta.appendChild(lista); // adiciona o ul ao container de tarefas completas
            input.focus(); // foco de volta ao campo de input
        });
        limpar.addEventListener("click", function () { // evento pra apagar as lista
            ultarefa.removeChild(lista);// remove o ul de tarefas pendentes
            input.focus(); // foco de volta ao campo de input
        });
        limpar2.addEventListener("click", function () { // evento pra apagar as lista
            ultarefacompleta.removeChild(lista);// remove o ul de tarefas completas
            input.focus(); // foco de volta ao campo de input
        });
    }
}

adicionar.addEventListener("click", adicionarTarefa);

document.addEventListener("keypress", function (event) { // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) { // Chama a função para adiciona r uma tarefa
        adicionarTarefa();
    }
});