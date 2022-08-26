let ataqueJugador
let ataqueDelEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMacotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanMacotaJugador.innerHTML = 'Hipodoge'
    } 
    else if (inputCapipepo.checked){
        spanMacotaJugador.innerHTML = 'Capipepo'
    }
    else if (inputRatigueya.checked){
        spanMacotaJugador.innerHTML = 'Ratigueya'
    }
    else{
        alert('No has seleccionado tu personaje')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1 ){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if(ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueEnemigo()
}

function ataqueTierra(){
    ataqueJugador =  'TIERRA'
    ataqueEnemigo()
}

function ataqueEnemigo() {
    let ataqueAleatorioEnemigo = aleatorio(1,3)

    if(ataqueAleatorioEnemigo == 1){
        ataqueDelEnemigo = 'FUEGO'
    }
    else if(ataqueAleatorioEnemigo == 2){
        ataqueDelEnemigo = 'AGUA'
    }
    else{
        ataqueDelEnemigo = 'TIERRA'
    }

    crearMensaje()
}

function crearMensaje(){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueDelEnemigo + ' Pendiente'

    seccionMensajes.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)