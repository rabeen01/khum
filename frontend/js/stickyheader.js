$(document).ready(function() {
    window.onscroll = function() {
        myFunction()
    };

    var pageheader = document.getElementById("page_header");
    var sticky = pageheader.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            pageheader.classList.add("sticky");
            $('.sticky-main').addClass("main");
        } else {
            pageheader.classList.remove("sticky");
            $('.sticky-main').removeClass("main");
        }
    }

    var margin = document.getElementById("page_header").clientHeight + "px";
    var style = document.createElement("style");
    style.innerHTML = ".main{margin-top:" + margin + "}";
    document.querySelector("head").append(style);

    $('.about .intro p a').attr("download");
    $('.about .intro p a').attr("target", "_blank");
});