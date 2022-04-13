function getRotes(el) {
    var origin = el.querySelector(".origin").innerHTML
    var destination = el.querySelector(".destination").innerHTML

    localStorage.setItem('origin', origin)
    localStorage.setItem('destination', destination)
}

function setRotes() {

    if (localStorage.length >= 1) {
        var originInput = document.querySelector('#origin')
        var destinationInput = document.querySelector('#destination')

        originInput.value = localStorage.getItem('origin')
        destinationInput.value = localStorage.getItem('destination')

        localStorage.clear()
    }

}