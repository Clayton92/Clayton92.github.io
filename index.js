function changeBackground() {
    $(".francesca").first().fadeIn("slow", function showNext() {
        var next = $(this).next('div').length ? $(this).next('div') : $(".francesca").first();
        $(this).siblings().fadeOut('slow').delay(1000);
        next.fadeIn("slow", showNext);
    });
}


$(document).ready(function () {
    setTimeout(changeBackground, 100);
});