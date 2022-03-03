// Efeito de rolagem
(function ($) {
    var $doc = $('html,body');
    $(".slideDown").click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    })
})(jQuery);
// ---