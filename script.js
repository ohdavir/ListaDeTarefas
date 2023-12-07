let botaoadiconar = document.getElementById("adicionar");
let ultarefa = document.getElementById("ultarefa");
let input = document.getElementById("camporesultado")
let botaofinalizar = document.getElementById("finalizar");
let botaolimpar2 = document.getElementById("limpar2")
let ultarefacompleta = document.getElementById("ultarefacompleta")


function adicionarTarefa() { // Função para adicionar uma tarefa
    if (input.value.trim() !== "") { // Verifica se o campo de input não está vazio
        let lista = document.createElement("li"); // Cria um parágrafo (<p>) para a nova tarefa
        lista.innerText = input.value; // Define o texto do parágrafo com o valor do campo de input
        ultarefa.appendChild(lista); // Adiciona o li ao container de tarefas pendentes
        input.value = ""; // Limpa o valor do campo de input
        input.focus(); // Define o foco de volta ao campo de input
        lista.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no parágrafo
            ultarefa.removeChild(lista);// Remove o parágrafo do container de tarefas pendentes
            ultarefacompleta.appendChild(lista);// Adiciona o parágrafo ao container de tarefas completas
        });
        botaolimpar.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no botão de limpar
            ultarefa.removeChild(lista); // Remove o parágrafo do container de tarefas pendentes
            ultarefacompleta.appendChild(lista); // Adiciona o parágrafo ao container de tarefas completas
            input.focus(); // Define o foco de volta ao campo de input
        });
        botaolimpar2.addEventListener("click", function () { // Adiciona um ouvinte de evento para o clique no segundo botão de limpar 
            ultarefacompleta.removeChild(lista);// Remove o parágrafo do container de tarefas completas
            input.focus(); // Define o foco de volta ao campo de input
        });
    }
}
// Adiciona um ouvinte de evento para o clique no botão de adicionar
botaoadiconar.addEventListener("click", adicionarTarefa);
// Adiciona um ouvinte de evento para a tecla Enter
document.addEventListener("keypress", function (event) { // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) { // Chama a função para adicionar uma tarefa
        adicionarTarefa();
    }
});