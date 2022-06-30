var setText = $('.breadcrumb .set-text');

// Initialize .breadcrumb for the existing '.nav-tabs .active'.
setText.addClass('active');
var initText = $('.nav-tabs .active').text();
setText.text(initText);

$('.nav-tabs li a').on('click', function() {
    setText.text($(this).text());
});

$('.tab_drawer_heading').on('click', function() {
    setText.text($(this).text());
});