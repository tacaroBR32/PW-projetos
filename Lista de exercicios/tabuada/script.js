/*Vou fazer a logica da tabuada aqui*/
alert('aqui farei uma tabuada com o numero que você deseja')

document.getElementById('bnt').onclick = function () {
    let numero = parseInt(document.getElementById('numero').value);
    /*Nessa function vou pegar o valor digitado no input e fazer a tabuada*/
   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    for (let i = 1; i <= 10; i++) {
        let produto = numero * i;
        resultado.innerHTML += `${numero} x ${i} = ${produto}<br>`;
    }
}