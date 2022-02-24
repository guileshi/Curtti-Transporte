var navbarHide = true;

$( window ).resize(function(){

    if (window.screen.width < 1024) {

        $(".navbar__list__container").removeClass("navbar__show")

        navbarHide = true;

    }
    else if (window.screen.width > 1025) {

        $(".navbar__list__container").addClass("navbar__show")

        navbarHide = false;

    }

})


$("#navbar__toggler").click(function(){
    if(navbarHide){
        $(".navbar__list__container").addClass("navbar__show")
        navbarHide = false
        return
    } else if(!navbarHide){
        $(".navbar__list__container").removeClass("navbar__show")
        navbarHide = true
        return
    }
})