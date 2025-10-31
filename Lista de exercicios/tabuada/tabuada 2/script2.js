document.getElementById("bnt").onclick = function() {
    let tabuada = document.getElementById("tabuada").value;
    let resultado = document.getElementById("resultado");

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Gera a nova tabuada
    for (let i = 1; i <= 10; i++) {
        let multi = `<p>${tabuada} x ${i} = <mark>${i * tabuada}</mark></p>`;
        resultado.innerHTML += multi;
    }
};