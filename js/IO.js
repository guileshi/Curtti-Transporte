// Como Funciona

var howWorks = document.querySelector("#howWorks")

var howWorksOptions = {
    root: null,

    threshold: 0.2,

    rootMargin: "0px"
}


var observerHowWorks = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === howWorks) {
            
            $('#howWorks').addClass('slideDownAnim')

        } 
    })
}, howWorksOptions);

if(howWorks){
    observerHowWorks.observe(howWorks)
}

// Explicação de Cotação

var quotationExplanation = document.querySelector("#quotationExplanation")

var quotationExplanationOptions = {
    root: null,

    threshold: 0.2,

    rootMargin: "0px"
}


var observerQuotationExplanation = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === quotationExplanation) {
            
            $('#quotationExplanation').addClass('slideDownAnim')

        } 
    })
}, quotationExplanationOptions);

if(quotationExplanation){
    observerQuotationExplanation.observe(quotationExplanation)
}

// Rotas

var rotes = document.querySelector("#rotes")

var rotesOptions = {
    root: null,

    threshold: 0.2,

    rootMargin: "0px"
}


var rotesCompanys = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === rotes) {
            
            $('#rotes').addClass('slideDownAnim')

        } 
    })
}, rotesOptions);

if(rotes){
    rotesCompanys.observe(rotes)
}

// Quem somos nós

var whoWeAre = document.querySelector("#whoWeAre")

var whoWeAreOptions = {
    root: null,

    threshold: 0.2,

    rootMargin: "0px"
}


var whoWeAreCompanys = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === whoWeAre) {
            
            $('#whoWeAreContent').addClass('slideDownAnim')

        } 
    })
}, whoWeAreOptions);

if(whoWeAre){
    whoWeAreCompanys.observe(whoWeAre)
}

// Contate-nos

var contactUs = document.querySelector("#contactUs")

var contactUsOptions = {
    root: null,

    threshold: 0.2,

    rootMargin: "0px"
}


var contactUsCompanys = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target === contactUs) {
            
            $('#contactUs').addClass('slideDownAnim')

        } 
    })
}, contactUsOptions);

if(contactUs){
    contactUsCompanys.observe(contactUs)
}