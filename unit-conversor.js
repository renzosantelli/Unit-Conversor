//DOM
//CONEXION DE SECCIONES
const kmToMph = document.getElementById('km-millas');
const cToF = document.getElementById('cToF');
const kgToLb = document.getElementById('kgToLb');
//CONEXION DE INPUTS
const inputKm = document.getElementById('input-km');
const inputC = document.getElementById('input-c');
const inputKg = document.getElementById('input-kg');
//CONEXION DE BOTONES
const btnKmToMph = document.getElementById('km-mph');
const btnCToF = document.getElementById('c-f');
const btnKgToLb = document.getElementById('kg-lb');
//CONEXION DE CONTAINERS
const contianerRespuestaKm = document.querySelector('.respuesta-km');
const contianerRespuestaC = document.querySelector('.respuesta-c');
const contianerRespuestaKg = document.querySelector('.respuesta-kg');

//FUNCION DE KM A MILLAS
function kmMillas() {
    const numeroIngresado = parseFloat(inputKm.value);
    //CALCULO
    const millas = (numeroIngresado * 0.62).toFixed(2);
    //MOSTRAR RESPUESTA
    const parrafoRespuesta = document.createElement('p');
    parrafoRespuesta.textContent = `${millas} Millas`;
    if (Number.isNaN(numeroIngresado)) {
        parrafoRespuesta.textContent = '';
    }
    contianerRespuestaKm.appendChild(parrafoRespuesta);
}

//FUNCION DE C A F 
function cF() {
    const numeroIngresado = parseFloat(inputC.value);
    const f = ((numeroIngresado * 1.8) + 32).toFixed(2);
    const parrafoRespuesta = document.createElement('p');
    parrafoRespuesta.textContent = `${f} Fahrenheit`;
    if (Number.isNaN(numeroIngresado)) {
        parrafoRespuesta.textContent = '';
    }
    contianerRespuestaC.appendChild(parrafoRespuesta);
}

//FUNCION DE KG A LB 
function kgLb() {
    const numeroIngresado = parseFloat(inputKg.value);
    const lb = (numeroIngresado * 2.20462).toFixed(2);
    const parrafoRespuesta = document.createElement('p');
    parrafoRespuesta.textContent = `${lb} Libras`
    if (Number.isNaN(numeroIngresado)) {
        parrafoRespuesta.textContent = '';
    }
    contianerRespuestaKg.appendChild(parrafoRespuesta);
}

inputKm.addEventListener('input', function() {
    contianerRespuestaKm.innerHTML = '';
    kmMillas();
});
inputC.addEventListener('input', function() {
    contianerRespuestaC.innerHTML = '';
    cF();
});
inputKg.addEventListener('input', function() {
    contianerRespuestaKg.innerHTML = ''
    kgLb();
});
btnKmToMph.addEventListener('click', function() {
    kmToMph.style.display = 'block';
    cToF.style.display = 'none';
    kgToLb.style.display = 'none';
});
btnCToF.addEventListener('click', function() {
    kmToMph.style.display = 'none';
    cToF.style.display = 'block';
    kgToLb.style.display = 'none';
});
btnKgToLb.addEventListener('click', function() {
    kmToMph.style.display = 'none';
    cToF.style.display = 'none';
    kgToLb.style.display = 'block';
});