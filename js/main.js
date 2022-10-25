alert("bienvinido al kiosco")
let miSaldo = 1000;
let efectivo = 800;

entrarAlKiosco()

function entrarAlKiosco() {
    let comprar = prompt("voy a pagar en efectivo o tarjeta?")
    
    if ("tarjeta" === comprar) {
            let tarjeta = comprar; 
            habilitarClave(tarjeta);
    
        } else if (comprar === "efectivo"){
            let efectivo = comprar;
            pagarEfetivo(efectivo)
        }
        else{
            alert("nada?")
            entrarAlKiosco()
        }
}

//TARJETA
function habilitarClave(tarjeta) {
    if (tarjeta) {
        let clave = prompt("ingrese clave de tarjeta");
        ingresarClave(clave)
    }else{
        alert("es necesario una tarjeta")
        entrarAlKiosco()
    }
}


function ingresarClave(clave) {
    if (clave === "123") {
        alert("tengo 1000 en tarjeta")
        seleccionarCompra()
    }else{
        alert("la contra es incorrecta ;c")
    }
}

function seleccionarCompra() {
    console.log ("------------")
    console.log("1- pescado 900$")
    console.log("2- salchichas 800$")
    console.log("3-patis 900$")
    console.log ("------------")

    let op = prompt("que vas a comprar")

    switch (op) {
        case "1":
            let precio1 = "comprar pescado"
            comprarPescado()
            break;
        case "2":
            let precio2 = "comprar salchichas"
            comprarSalchichas()
            break;
        case "3":
            let precio3 = "comprar patis"
            comprarPatis()
            break;

            default:
            console.log("okey vuelva pronto")
            break;
    }
}

function comprarPescado() {
    let resultado = miSaldo - 900
    alert("mi vuelto es " + resultado)
    seleccionarCompra()
}

function comprarSalchichas() {
    let resultado = miSaldo - 800
    alert("mi vuelto es " + resultado)
    seleccionarCompra()
}

function comprarPatis() {
    let resultado = miSaldo - 900
    alert("mi vuelto es " + resultado)
    seleccionarCompra()
}

//EFECTIVO

function pagarEfetivo(efectivo) {
    alert("solo tengo 800$")
    seleccionarSemiCompra()
}

function seleccionarSemiCompra() {
    console.log ("------------")
    console.log("1- terrabusi 500$")
    console.log("2- caramelos  200$")
    console.log("3- alfajor 250$")
    console.log ("------------")

    let op = prompt("que vas a comprar")

    switch (op) {
        case "1":
            let precio1 = "comprar terrabusi"
            comprarTerrabusi()
            break;
        case "2":
            let precio2 = "comprar caramelos"
            comprarCaramelos()
            break;
        case "3":
            let precio3 = "comprar alfajor"
            comprarAlfajor()
            break;

            default:
            console.log("okey vuelva pronto")
            break;
    }


}

function comprarTerrabusi() {
    let resultado = efectivo - 500
    alert("mi vuelto es " + resultado)
    entrarAlKiosco()
}
function comprarCaramelos() {
    let resultado = efectivo - 200
    alert("mi vuelto es " + resultado)
    entrarAlKiosco()
}
function comprarAlfajor() {
    let resultado = efectivo - 250
    alert("mi vuelto es " + resultado)
    entrarAlKiosco()
}