alert("Aqui verei se o número é negativo ou possitivo")
//Essa função fará a logica
document.getElementById('bnt').onclick = function(){
  n1 = document.getElementById('n1').value;

 
   if(n1 > 0){
     document.getElementById("resul").innerHTML = "Positivo"
   }
   else if(n1 < 0){
    document.getElementById("resul").innerHTML = "Negativo"

   }
   else{
   document.getElementById("resul").innerHTML = "Nulo"

   }
}