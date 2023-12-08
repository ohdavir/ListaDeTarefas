let adicionar = document.getElementById("adicionar");
let ultarefa = document.getElementById("ultarefa");
let input = document.getElementById("camporesultado")
let finalizar = document.getElementById("finalizar");
let limpar = document.getElementById("limpar");
let limpar2 = document.getElementById("limpar2");
let ultarefacompleta = document.getElementById("ultarefacompleta");
let video = document.getElementById("video");
let tudo = document.getElementById("tudo");
let voltar = document.getElementById("voltar");


function adicionarTarefa() {
    voltar.addEventListener("click", function () {
        video.style.display = "none";
        tudo.style.display = "flex";
    })
    if (input.value == "3") {
        video.style.display = "flex";
        tudo.style.display = "none";
    }
    if (input.value.trim() !== "") {
        let lista = document.createElement("li"); // cria um li para a nova tarefa
        lista.innerText = input.value; // texto do li com o valor do campo de input
        ultarefa.appendChild(lista);
        input.value = ""; // limpa o valor do campo de input
        input.focus();
        lista.addEventListener("click", function () { // evento de click 
            ultarefa.removeChild(lista);
            ultarefacompleta.appendChild(lista);
        });
        // evento pra apagar as lista
        if (ultarefa.value != "") {
            finalizar.addEventListener("click", function () { // evento pra finalizar tudo
                ultarefa.removeChild(lista);
                ultarefacompleta.appendChild(lista);
                input.focus();
            });
            limpar.addEventListener("click", function () {
                ultarefa.removeChild(lista);
                input.focus();
            });
        }
        if (ultarefacompleta.value != "") {
            limpar2.addEventListener("click", function () {
                ultarefacompleta.removeChild(lista);
                input.focus();
            });
        }

    }
}

adicionar.addEventListener("click", adicionarTarefa);

document.addEventListener("keypress", function (event) { // Verifica se a tecla pressionada é Enter (código 13)
    if (event.keyCode === 13) { // Chama a função para adicionar uma tarefa
        adicionarTarefa();
    }
});