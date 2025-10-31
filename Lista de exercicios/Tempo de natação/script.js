document.getElementById('bnt').onclick = function(){

 let nada = [parseFloat(document.getElementById('t1').value), parseFloat(document.getElementById('t2').value), parseFloat(document.getElementById('t3').value)]
nada.sort((a, b)=> a - b)

let resul = document.getElementById('resul');
resul.innerHTML = ' '

resul.innerHTML += `<p>Ouro: ${nada[0]} segundos<br></p>`
resul.innerHTML += `<p>Prata: ${nada[1]} segundos<br></p>`
resul.innerHTML += `<p>Bronze: ${nada[2]} segundos<br></p>`

} 


/* document.getElementById('bnt').onclick = function () {
    let v = new Array(3);
    let t1 = parseFloat(document.getElementById('t1').value);
    let t2 = parseFloat(document.getElementById('t2').value);
    let t3 = parseFloat(document.getElementById('t3').value);
    v[0] = t1;
    v[1] = t2;
    v[2] = t3;

    for (let i = 2; i < 3; i++) {
        let aux = v[i];                   10 1 20 
        let j = i - 1;
        while (aux < v[j]) {          
            v[j + 1] = v[j];
            j = j - 1;
            if (j == 0) {
                break;
            }
        }
        v[j + 1] = aux;
    }

    let resul = document.getElementById('resul');
    resul.innerHTML = '';

    
for(i = 0; i < 3; i++){
resul.innerHTML += + '(v[0])  segundos<br>';
resul.innerHTML += (v[1])
}
} */
    

