function inputBlur(input){
    if(!input.value){
        input.classList.remove("blur")
        input.classList.add("blurError")

    } else{
        input.classList.remove("blurError")
        input.classList.add("blur")
    }
}

function inputFocus(input){
    input.classList.remove("blur")
    input.classList.remove("blurError")
}

function nextStep(){

    if($(`.input__text`).val()){
        $('#quotationButton').html("Solicitar Cotação")

        $('.quotation__error').css({"visibility": "hidden"})

        $('#mainVolume').addClass('hide')
        $('#volumeTitle').addClass('hide')
        $('#cargoDataTitle').addClass('hide')
        $('#cargoData').addClass('hide')

        $('#mainVolume').removeClass('unhide')
        $('#volumeTitle').removeClass('unhide')
        $('#cargoDataTitle').removeClass('unhide')
        $('#cargoData').removeClass('unhide')

        $('#pessoalDataTitle').addClass("unhide")
        $('#pessoalData').addClass('unhide')

        $('#pessoalDataTitle').removeClass("hide")
        $('#pessoalData').removeClass('hide')

        $('#quotationButton').attr('type', 'submit')

        $('#divider1').addClass("svgFill")
        $('#visualizerPersonalData').removeClass('--desactived')

        $('#visualizerCargoData').addClass('--desactived')

        $('#centerSVG').addClass('svgFill')

        $('.quotation__back').on('click', function(event){
            event.preventDefault()
        })

        return
    } else{
        $('.quotation__error').css({"visibility": "visible"})

        return
    }

}

function backStep(){

    if($('#cargoData').hasClass('hide')){

        $('#quotationButton').html("Continuar para Dados Pessoais")

        $('#mainVolume').addClass('unhide')
        $('#volumeTitle').addClass('unhide')
        $('#mainVolume').removeClass('hide')
        $('#volumeTitle').removeClass('hide')


        $('#cargoDataTitle').addClass('unhide')
        $('#cargoData').addClass('unhide')
        $('#cargoDataTitle').removeClass('hide')
        $('#cargoData').removeClass('hide')
        
        $('#pessoalDataTitle').addClass("hide")
        $('#pessoalData').addClass('hide')
        $('#pessoalDataTitle').removeClass("unhide")
        $('#pessoalData').removeClass('unhide')
    
        $('#quotationButton').attr('type', 'button')
    
        $('#divider1').removeClass("svgFill")
        $('#visualizerPersonalData').addClass('--desactived')
    
        $('#visualizerCargoData').removeClass('--desactived')
    
        $('#centerSVG').removeClass('svgFill')
    
        $(this).attr("href", "cotacoes.html");

        console.log("IF")
    } else{
        $('.quotation__back').unbind();
        console.log("ELSE")
    }
}