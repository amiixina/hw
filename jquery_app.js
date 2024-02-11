$(document).ready(function() {
    $("#addHtmlt").html('<h1> New Element </h1>')
    $(".a").hide();
    $("section").remove();
    $("div").addClass(function () {
        $(this).text("Lumos Maxima");
    });
    ;
    $("div.a").css({
        background: "#f66668",
        borderRadius: "50% 0 50% 0",
        width: "200px",
        height: "120px",
        lineHeight: "80px",
        textAlign: "center",
    });
});
