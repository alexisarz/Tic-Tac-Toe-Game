// CASILLEROS

var a1 = document.getElementById('A1');
var b1 = document.getElementById('B1');
var c1 = document.getElementById('C1');
var a2 = document.getElementById('A2');
var b2 = document.getElementById('B2');
var c2 = document.getElementById('C2');
var a3 = document.getElementById('A3');
var b3 = document.getElementById('B3');
var c3 = document.getElementById('C3');

//Cartel ganador

var cartel = document.getElementById('cartelGanador');

//Funcion general del juego

function Juego(){
    
    //Variable de jugador
    var jugador = true;
   
    //Variable del contador de clicks en caso de empate
    var clickCounter = 0
    
    //Funcion de coloreado
    function color(casillero){
        
        //Funcion de cartel ganador 
        function GanadorAzul(){
            cartel.style.color = "blue";
            cartel.innerHTML = "Ganador jugador AZUL!!!";
        }

        function GanadorRojo(){
            cartel.style.color = "red";
            cartel.innerHTML = "Ganador jugador ROJO!!!";
        }

        function Empate(){
            cartel.style.color = "purple";
            cartel.innerHTML = "EMPATE"
        }
        //Coloreo de casillas azules y cambio de jugador
        if (jugador == true){
            casillero.style.background = "blue";
            jugador = !jugador;
            clickCounter++
            //Probabilidades de ganador azul
                //Horizontal
            if ((a1.style.background == "blue" && b1.style.background == "blue" && c1.style.background == "blue") ||
                (a2.style.background == "blue" && b2.style.background == "blue" && c2.style.background == "blue") ||
                (a3.style.background == "blue" && b3.style.background == "blue" && c3.style.background == "blue") ||
                //Vertical
                (a1.style.background == "blue" && a2.style.background == "blue" && a3.style.background == "blue") ||
                (b1.style.background == "blue" && b2.style.background == "blue" && b3.style.background == "blue") ||
                (c1.style.background == "blue" && c2.style.background == "blue" && c3.style.background == "blue") ||
                //Diagonal 
                (a1.style.background == "blue" && b2.style.background == "blue" && c3.style.background == "blue") ||
                (c1.style.background == "blue" && b2.style.background == "blue" && a3.style.background == "blue")){
                    
                    
                return GanadorAzul()
                
            }
            
            else if (clickCounter == 9){
                
                    return Empate()
            } 
            
        }
        
        //Coloreo de casillas rojas y cambio de jugador
        else if (jugador == false){
            casillero.style.background = "red";
            jugador = !jugador;
            clickCounter++
            //Probabilidades de ganador rojo
                //Horizontal
            if ((a1.style.background == "red" && b1.style.background == "red" && c1.style.background == "red") ||
                (a2.style.background == "red" && b2.style.background == "red" && c2.style.background == "red") ||
                (a3.style.background == "red" && b3.style.background == "red" && c3.style.background == "red") ||
                //Vertical
                (a1.style.background == "red" && a2.style.background == "red" && a3.style.background == "red") ||
                (b1.style.background == "red" && b2.style.background == "red" && b3.style.background == "red") ||
                (c1.style.background == "red" && c2.style.background == "red" && c3.style.background == "red") ||
                //Diagonal 
                (a1.style.background == "red" && b2.style.background == "red" && c3.style.background == "red") ||
                (c1.style.background == "red" && b2.style.background == "red" && a3.style.background == "red")){
                    
                    
                return GanadorRojo()
                
            }

            else if (clickCounter == 9){
                
                    return Empate()
            } 
        
        }

        
    }

    
    //Aplicacion de la function color() en los casilleros html mediante Listeners
    
    a1.addEventListener('click', function (){color(a1)})
    b1.addEventListener('click', function (){color(b1)})
    c1.addEventListener('click', function (){color(c1)})
    a2.addEventListener('click', function (){color(a2)})
    b2.addEventListener('click', function (){color(b2)})
    c2.addEventListener('click', function (){color(c2)})
    a3.addEventListener('click', function (){color(a3)})
    b3.addEventListener('click', function (){color(b3)})
    c3.addEventListener('click', function (){color(c3)})
    


}

//Ejecucion del juego

Juego();