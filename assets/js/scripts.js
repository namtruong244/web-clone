(function ($){
$(".buttonfirst").click(function() {
    $('html,body').animate({
        scrollTop: $(".maincolumnsblock1").offset().top},
        'slow');
});
})(jQuery);


(function ($){
$(".buttonsecond").click(function() {
    $('html,body').animate({
        scrollTop: $(".top").offset().top},
        'slow');
});
})(jQuery);


(function ($){
  $(function (){
    $smallscreen_parallax();
    $(window).resize(function () {
    $smallscreen_parallax()
    });
  });
  $smallscreen_parallax = function ()
    {
    if ( $(window).width() <= 767 ) {
    //code for desktop
    } 
    else {
    $('.startAnimation').waypoint(function() {
    var animationclass = $(this).attr('data-animate');
    $(this).css('opacity', '1');
    $(this).addClass("animated " + animationclass);
    },
    {
    offset: '100%',
    triggerOnce: true
   }
  );
}            
}
})(jQuery);
