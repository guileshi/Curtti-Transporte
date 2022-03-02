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

        $('#pessoalDataTitle').addClass("unhide")
        $('#pessoalData').addClass('unhide')

        $('#quotationButton').attr('type', 'submit')

        $('#divider1').addClass("svgFill")
        $('#visualizerPersonalData').removeClass('--desactived')

        $('#visualizerCargoData').addClass('--desactived')

        $('#centerSVG').addClass('svgFill')

        return
    } else{
        $('.quotation__error').css({"visibility": "visible"})

        return
    }

}