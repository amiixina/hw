
$("#btn-rectangle").click(function() {
    $(".animated")
      .animate({ left: 300 })
      .animate({ top: 100 })
      .animate({ left: 0 })
      .animate({ top: 0 });
  });

  $("#btn-triangle").click(function() {
    $(".animated")
      .animate({ left: 150, top: 0 })
      .animate({ left: 300, top: 200 })
      .animate({ left: 0, top: 200 })
      .animate({ left: 150, top: 0 });
  });

 $("#btn-sizing").click(function(e){
    var $animated = $(".animated");
    if($animated.css("opacity") == "0"){
        $animated.animate({
            width: 400,
            height: 400,
            opacity: 1
        }, 1000);
    } else {
        $animated.animate({
            width: 50,
            height: 50,
            opacity: 0
        }, 1000);
    }
});
   
  