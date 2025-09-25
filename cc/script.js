let chave = "0df3ab5ee2bdc38d6af704fe49411969";

function clique() {

    let cidade = document.querySelector(".input-cidade").value;
    BuscarCidade(cidade);



}



//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function BuscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave+
        "&lang=pt_br"+
        "&units=metric"

    ).then(res => res.json());



    console.log(dados);

    colocaNatela(dados);

}

function colocaNatela(dados){
   document.querySelector(".nome-cidade").innerHTML = dados.name;
   document.querySelector(".tempo").innerHTML = Math.round(dados.main.temp);
   document.querySelector(".descricao").innerHTML = dados.weather[0].description;
   document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
   document.querySelector("#icon").src = "https://api.openweathermap.org/img/wn/".dados.weather[0].icon;

}

