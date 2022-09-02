let ataqueJugador
let ataqueDelEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

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

    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueDelEnemigo){
        crearMensaje('EMPATE')
    }else if(ataqueJugador == 'FUEGO' && ataqueDelEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueDelEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == 'TIERRA' && ataqueDelEnemigo == 'AGUA'){
        crearMensaje('GANASTE') 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else{
        crearMensaje('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES! 🎉🎉 Ganaste')
    }else if (vidasJugador == 0){
        crearMensajeFinal('OH NO! 😢😢 Perdiste')
    }
}

function crearMensaje(resultado){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueDelEnemigo + ' - ' + resultado

    seccionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let seccionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = resultadoFinal

    seccionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)