$(document).ready(function(){

/*
$("선택자").hover(function(){
마우스엔터상황
},function(){
마우스리브상황
});
*/
$(".menu").hover(function(){
	$(this).find(".sub").stop().slideDown(500);
	$(this).find(".main").addClass("on");


},function(){
	$(this).find(".sub").stop().slideUp(500);
	$(this).find(".main").removeClass("on");
});


});/*ready end*/

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back_to_top').fadeIn(duration);
        } else {
            jQuery('.back_to_top').fadeOut(duration);
        }
    });

    jQuery('.back_to_top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
