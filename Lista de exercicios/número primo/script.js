// Seleciona o botão com id "bnt" e define a função que será executada ao clicar
document.getElementById("bnt").onclick = function () {

    // Pega o valor do input com id "n1" e converte para número inteiro
    let numero = parseInt(document.getElementById('n1').value);

    // Seleciona o elemento onde o resultado será exibido
    let resul = document.getElementById('resul');
    
    // Limpa o resultado anterior
    resul.innerHTML = "";

    // Se o número for menor ou igual a 1, não é primo
    if (numero <= 1) {
        resul.innerHTML += "<p>Não é primo</p>";

    // Se o número for 2, é primo (único número primo par)
    } else if (numero === 2) {
        resul.innerHTML = "<p>É primo</p>";

    // Se o número for par e maior que 2, não é primo
    } else if (numero % 2 === 0) {
        resul.innerHTML += "<p>Não é primo</p>";

    // Para números ímpares maiores que 2
    } else {
        // Variável que indica se o número é primo
        let ehPrimo = true;

        // Limite para verificar divisores: raiz quadrada do número
        const limite = Math.sqrt(numero);

        // Testa divisores ímpares de 3 até a raiz quadrada
        for (let i = 3; i <= limite; i += 2) {
            // Se encontrar um divisor, não é primo
            if (numero % i === 0) {
                ehPrimo = false;
                break; // Interrompe o loop se encontrar um divisor
            }
        }
        
        // Mostra no console se o número é primo ou não
        console.log(ehPrimo ? "É primo" : "Não é primo");

        // Exibe o resultado na tela dentro do elemento "resul"
        resul.innerHTML += ehPrimo ? "<p>É primo</p>" : "<p>Não é primo</p>";
    }
}
