// BOTONES DEL MENÚ

const btnFib =
document.getElementById("btnFib");

const btnPrimo =
document.getElementById("btnPrimo");

const btnCombinado =
document.getElementById("btnCombinado");

// SECCIONES

const seccionFib =
document.getElementById("seccionFib");

const seccionPrimo =
document.getElementById("seccionPrimo");

const seccionCombinado =
document.getElementById("seccionCombinado");

// MOSTRAR SECCIONES

btnFib.addEventListener(
"click",
function(){

    seccionFib.classList.remove("oculto");

    seccionPrimo.classList.add("oculto");

    seccionCombinado.classList.add("oculto");

}
);

btnPrimo.addEventListener(
"click",
function(){

    seccionFib.classList.add("oculto");

    seccionPrimo.classList.remove("oculto");

    seccionCombinado.classList.add("oculto");

}
);

btnCombinado.addEventListener(
"click",
function(){

    seccionFib.classList.add("oculto");

    seccionPrimo.classList.add("oculto");

    seccionCombinado.classList.remove("oculto");

}
);

// =====================================================
// PROBLEMA 1
// =====================================================

const calcularFib =
document.getElementById("calcularFib");

calcularFib.addEventListener(
"click",
calcularAhorro
);

function calcularAhorro(){

    let meses =
    parseInt(
    document.getElementById("meses").value
    );

    let a = 0;
    let b = 1;
    let c;

    let resultado = "";

    let total = 0;

    for(let i = 1; i <= meses; i++){

        resultado +=
        "Mes " + i +
        ": Bs. " + b +
        "<br>";

        total += b;

        c = a + b;

        a = b;

        b = c;
    }

    resultado +=
    "<br><strong>Total ahorrado: Bs. "
    + total +
    "</strong>";

    const resultadoFib =
    document.getElementById("resultadoFib");

    resultadoFib.innerHTML =
    resultado;

    // BAJAR AUTOMÁTICAMENTE

    resultadoFib.scrollIntoView({
        behavior: "smooth"
    });

}

// =====================================================
// PROBLEMA 2
// =====================================================

const verificarPrimo =
document.getElementById("verificarPrimo");

verificarPrimo.addEventListener(
"click",
verificarCodigo
);

function verificarCodigo(){

    let codigo =
    document.getElementById("codigo").value;

    let numero =
    parseInt(codigo);

    const resultadoPrimo =
    document.getElementById("resultadoPrimo");

    if(codigo.length < 4 || codigo.length > 8){

        resultadoPrimo.innerHTML =
        "El código debe tener entre 4 y 8 dígitos";

        resultadoPrimo.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }

    let divisores = 0;

    for(let i = 1; i <= numero; i++){

        if(numero % i == 0){

            divisores++;
        }
    }

    if(divisores == 2){

        resultadoPrimo.innerHTML =
        "El código ES primo y puede servir como seguridad básica";

    }else{

        resultadoPrimo.innerHTML =
        "El código NO es primo";
    }

    // BAJAR AUTOMÁTICAMENTE

    resultadoPrimo.scrollIntoView({
        behavior: "smooth"
    });

}

// =====================================================
// PROBLEMA 3
// =====================================================

const calcularCombinado =
document.getElementById("calcularCombinado");

calcularCombinado.addEventListener(
"click",
fibonacciPrimos
);

function fibonacciPrimos(){

    let cantidad =
    parseInt(
    document.getElementById("terminos").value
    );

    let a = 0;
    let b = 1;
    let c;

    let resultado = "";

    for(let i = 1; i <= cantidad; i++){

        let divisores = 0;

        for(let j = 1; j <= b; j++){

            if(b % j == 0){

                divisores++;
            }

        }

        if(divisores == 2){

            resultado +=
            b +
            " es Fibonacci y Primo <br>";

        }else{

            resultado +=
            b +
            " es Fibonacci pero no Primo <br>";
        }

        c = a + b;

        a = b;

        b = c;
    }

    const resultadoCombinado =
    document.getElementById("resultadoCombinado");

    resultadoCombinado.innerHTML =
    resultado;

    // BAJAR AUTOMÁTICAMENTE

    resultadoCombinado.scrollIntoView({
        behavior: "smooth"
    });

}