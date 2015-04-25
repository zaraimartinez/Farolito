  $(window).scroll(function() {
  	var menu= $(this).scrollTop();
    if (menu > 500){
    	$(".navbar").addClass("scroll");
      $(".logo-nav").addClass("scroll");
      $(".boton-perfil").addClass("scroll");


    }
    	else if(menu < 500){
    		$(".navbar").removeClass("scroll");
        $(".logo-nav").removeClass("scroll");
         $(".boton-perfil").removeClass("scroll");

    	}
    });


$(document).ready(function(){
  $(".circulo-externo").hover(function(){
    $(".home-metodologia").toggleClass("hidden");
    $(".hover-metodologia").toggleClass("hidden");
  });
});


// $(function() {
//   var btn_movil = $(‘#nav-mobile’),
//     menu = $(‘.navbar’).find(‘ul’);
 
//     // Al dar click agregar/quitar clases que permiten el despliegue del menú
//     btn_movil.on(‘click’, function (e) {
//         e.preventDefault();
 
//         var el = $(this);
 
//         el.toggleClass(‘nav-active’);
//         menu.toggleClass(‘open-menu’);
//     });
// });

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > ($(window).height() - 90)) {
  //     $(".navbar").addClass('on-scroll');
  //   } else {
  //     $(".navbar").removeClass('on-scroll');
  //   }
  // });
