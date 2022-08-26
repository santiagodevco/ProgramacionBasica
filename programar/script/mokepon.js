function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
}

window.addEventListener('load', iniciarJuego)