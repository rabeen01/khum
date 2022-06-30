$(".vertical-tab .tab_drawer_heading:first").addClass("d_active");
// /* if in tab mode */
$("ul.nav-tabs li a").click(function() {

    var activeTab = $(this).attr("href");
    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[ref^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {

    $(".vertical-tab .tab-pane").removeClass(["active", "show"]);
    var d_activeTab = $(this).attr("ref");
    $(d_activeTab).addClass(['active', 'show']);

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.nav-tabs li a").removeClass("active");
    $("ul.nav-tabs li a[href^='" + d_activeTab + "']").addClass("active");
});





$(".tab-chart .tab_drawer_heading:first").addClass("d_active");
// /* if in tab mode */
$("ul.nav-mytabs li a").click(function() {

    var activeTab = $(this).attr("href");
    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[ref^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {

    $(".tab-chart .tab-pane").removeClass(["active", "show"]);
    var d_activeTab = $(this).attr("href");
    $(d_activeTab).addClass(['active', 'show']);

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.nav-mytabs li a").removeClass("active");
    $("ul.nav-mytabs li a[href^='" + d_activeTab + "']").addClass("active");
});