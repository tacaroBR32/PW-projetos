
document.getElementById('bnt').onclick = function calcular() {
    let sid = parseInt(document.getElementById("sd").value)
    let idfc = parseInt(document.getElementById("fc").value)
    let idfm = parseInt(document.getElementById("fm").value)
    
    let id = idfc+idfm
    let idfv = sid-id
    
    const idade = [idfc, idfm, idfv].sort((a, b)=> a-b)
    
    document.getElementById("result").innerHTML = `O filho mais velho tem ${idade[2]}`

}

