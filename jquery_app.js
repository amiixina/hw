$(document).ready(
    function (){
// -------- 1 --------
$("#addHtmlt").html('<h1> New Element </h1>');
// -------- 2 --------
    $(".a").hide();
// -------- 3 --------
    $("section").remove();
// -------- 4 ---------
    $("div.b").text("Lumos Maxima");
    $("div.b").css({
        background: "#f66668",
        borderRadius: "50% 0 50% 0",
        width: "200px",
        height: "120px",
        lineHeight: "80px",
        textAlign: "center",
    });
}
);

