function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')

    if (inputHipodoge.checked){
        alert('Seleccionaste a HIPODOGE')
    } 
    else if (inputCapipepo.checked){
        alert('Seleccionaste a CAPIPEPO')
    }
    else if (inputRatigueya.checked){
        alert('Seleccionaste a RATIGUEYA')
    }
    else{
        alert('No has seleccionado tu personaje')
    }
}

window.addEventListener('load', iniciarJuego)