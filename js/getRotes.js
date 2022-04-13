function getRotes(el) {
    var origin = el.querySelector(".origin").innerHTML
    var destination = el.querySelector(".destination").innerHTML

    localStorage.setItem('Origem', origin)
    localStorage.setItem('Destino', destination)
}

function setRotes() {

    if (localStorage.length >= 1) {
        var originInput = document.querySelector('#origin')
        var destinationInput = document.querySelector('#destination')

        originInput.value = localStorage.getItem('Origem')
        destinationInput.value = localStorage.getItem('Destino')

        localStorage.clear()
    }

}