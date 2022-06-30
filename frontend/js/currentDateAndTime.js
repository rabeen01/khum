$(document).ready(function() {
    document.getElementById("dateTime").innerHTML = formatAMPM();

    function formatAMPM() {
        var d = new Date();
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return d.getFullYear() + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + days[d.getDay()];
    }
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#return-to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('#return-to-top').stop(true, true).fadeOut();
    }
});
$(function() {
    $("#return-to-top").click(function() {
        $("html,body").animate({
            scrollTop: $(".thetop").offset().top
        }, "5000");
        return false
    })
})