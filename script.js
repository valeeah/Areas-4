function Triangulo(){
    var n1= parseFloat(document.getElementById("n1").value);
    var n2= parseFloat(document.getElementById("n2").value);
    var area= (n1 * n2)/2;
    document.getElementById("res").value= area;
}
function Circulo(){
   var radio=parseFloat(document.getElementById("radio").value);
    var area=Math.PI * radio * radio;
    area= area.toFixed(2);
    document.getElementById("res").value=area;

}
 function Cuadrado(){
    var lado=parseFloat(document.getElementById("lado").value);

    var area= lado*lado;

    document.getElementById("res").value=area;

 }
 function Rectangulo(){
    var ancho=parseFloat(document.getElementById("ancho").value);
    var largo=parseFloat(document.getElementById("largo").value);
    var area= largo*ancho;

    document.getElementById("res").value=area;
 }