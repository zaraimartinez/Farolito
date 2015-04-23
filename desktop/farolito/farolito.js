
$(document).ready(function){
	$(".circulo-externo").hover(function(){
		$(".home-metodologia").toggleClass("hidden");
		$(".hover-metodologia").toggleClass("hidden");
	});
});

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > ($(window).height() - 90)) {
  //     $(".navbar").addClass('on-scroll');
  //   } else {
  //     $(".navbar").removeClass('on-scroll');
  //   }
  // });

  $(window).scroll(function() {
  	var menu= $($(this).scrollTop();
    if (menu > 650){
    	$(".navbar").addClass("scroll")
    }
    	else if(menu < 650){
    		$(".navbar").removeClass("scroll");

    	}
    });