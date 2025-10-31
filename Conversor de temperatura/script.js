//alert('Não quebre meu codigo! Use F5!');

function fazTudo(select, idCelsius, idFahrenheit, idKelvin) {
    //Aqui eu pego os elementos dos selects e já "coloco" nos inputs
    const celciusSelect = document.getElementById(idCelsius).value = select.value;
    const fahrenheitSelect = document.getElementById(idFahrenheit).value = select.value;
    const kelvinSelect = document.getElementById(idKelvin).value = select.value

     //Aqui converte o texto em numero flutuante
    const valuer = parseFloat(select.value);

     //Aqui ja começa a brincadeira de converter
    if (select.id === 'tcomumc'){//Esse tcomumc é o id do selct, a letra no final é a temperatura que ele é;
        document.getElementById(idCelsius).value = valuer + '°C';
        // Celsius para Fahrenheit e Kelvin
        document.getElementById(idFahrenheit).value = (valuer * 9 / 5) + 32 + '°F';
        document.getElementById(idKelvin).value = valuer + 273.15 + 'K';
    }
    else if (select.id === 'tcomumf') {
        document.getElementById(idFahrenheit).value = valuer + '°F';
        // Fahrenheit para Celsius e Kelvin
        document.getElementById(idCelsius).value = (valuer - 32) * 5 / 9 + '°C';
        document.getElementById(idKelvin).value = (valuer - 32) * 5 / 9 + 273.15 + 'K';
    }
    else if (select.id === 'tcomumk') {
        document.getElementById(idKelvin).value = valuer + 'K';
        // Kelvin para Celsius e Fahrenheit
        document.getElementById(idCelsius).value = valuer - 273.15 + '°C';
        document.getElementById(idFahrenheit).value = (valuer - 273.15) * 9 / 5 + 32 + '°F';
    }
  //Aqui chega o fim da função que atua nos selects
}

//Aqui começa a função que atua nos inputs

//Essa primeira parte eu pego os elementos dos inputs
const celciusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

/*/Aqui coloco a função comprimida para cada input, começando pelo celcius;
Ela adciona um evanto, que quando você digita algo no input, 
ele pega o valor digitado, e faz a brincadeira;
*/
celciusInput.addEventListener('input', () => {

    if(celciusInput.value === ''){
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;

    }
    //Transformando o texto em numero, obviomente
    const val = parseFloat(celciusInput.value);
   
    /*A brincadeira aqui acontece de uma maneira maias complicada;
     Essa condição que esta dentro do if, quer dizer que se não tiver nada dentro, o cidigo não roda;
    */

    if (!isNaN(val)) {
    //Pegando o valor digitado, ele converte para Fahrenheit e Kelvin, e já coloca o valor convertido nos inputs respectivos;
        fahrenheitInput.value = (val * 9 / 5 + 32).toFixed(2) + '°F';
        kelvinInput.value = (val + 273.15).toFixed(2) + 'K';
    }

});


//A mesma coisa acontece aqui;
fahrenheitInput.addEventListener('input', () => {

     if(fahrenheitInput.value === ''){
        celciusInput.value = '';
        kelvinInput.value = '';
        return;

    }

    const val = parseFloat(fahrenheitInput.value);
    if (!isNaN(val)) {
        
        celciusInput.value = ((val - 32) * 5 / 9).toFixed(2) + '°C';
        kelvinInput.value = ((val - 32) * 5 / 9 + 273.15).toFixed(2) + 'K';
    }
});
//E por fim, aqui também;
kelvinInput.addEventListener('input', () => {
    
    if(kelvinInput.value === ''){
        fahrenheitInput.value = '';
        celciusInput.value = '';
        return;

    }

    const val = parseFloat(kelvinInput.value);
    if (!isNaN(val)) {
       
        celciusInput.value = (val - 273.15).toFixed(2) + '°C';
        fahrenheitInput.value = ((val - 273.15) * 9 / 5 + 32).toFixed(2) + '°F';
    }
});

//Fim do programa, Um pouco complicado, mas funciona bem! E bem trabalhoso também;
 


