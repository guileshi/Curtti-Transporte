function verifyOnLoad() {
    var paramsString = window.location.search
    var params = new URLSearchParams(paramsString)


    if(params.has('sucesso')){
        $('.success__card').css('display', 'block')
    } else{
        return
    }

}