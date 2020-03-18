(function($){

	$(window).on('load',function(){
          
            toggleTargetClass();
            
            if($('.pa--slider').length){
                sliderBehaviours();
            }
          
		headerFixedBehaviours();
            anchorLinkBehaviours();
		  
		if(window.innerWidth <= 767) {
                  mobileOnlySlider();
		}
 
	});
     
     
     $(window).on('resize',function(){
          
          headerFixedBehaviours();
          
          if($('.pa--main-menu.active').length && delayTime !== 0){
               setMenuDelay(delayTime = 0);     
		  }
		  
		  if(window.innerWidth <= 767) {
			mobileOnlySlider();
		}
          
     });
     
     $(window).on('scroll',function(){
          
          headerFixedBehaviours();
           
	});
     
     
     
	
	/*------------------------------------------------------------------------------Functions */
     
     
     
     function headerFixedBehaviours(){
          
          if($(window).width() < 992 && $(window).scrollTop() > 26){
               $('header').addClass('fixed');
           }else{
               $('header').removeClass('fixed');
           }
          
     }
     
     
	
	function toggleTargetClass(){
		
		$.fn.toggleTargetClassActions = function(){
			var item = $(this);
			var itemTarget = item.data('toggle-class-target');
			$('[data-element-target="' + itemTarget + '"]').toggleClass('active');
               
               if(item.hasClass('pa--main-menu-button')){
                    mobileMenuBehaviours(item);
               }
               
		};
		
		$(document).on('click','[data-toggle-class-target]',function(){
			$(this).toggleTargetClassActions();
		});
		
	}
	
	function sliderBehaviours(){
          
		$('.pa--main-slider').slick({
			arrows: false,
			dots: true
		});
          
	}
     
     
     function mobileMenuBehaviours(item){
          
          if(item.hasClass('pa--main-menu-button')){
               if(item.hasClass('active')){
                    setMenuDelay(delayTime = 0);
               }else{
                    setMenuDelay(delayTime = 150);
               }
          }
          
     }

     
     function setMenuDelay(delayTime){
          $('.pa--main-menu a').each(function(i,obj){
               var item = $(obj);
               item.css({'transition-delay': i * delayTime + 'ms' });
          });
          
	 }
       
       
      function anchorLinkBehaviours(){
            
          var scrollElement = 'html, body';
          
          $('[data-anchor-area]').each(function(i,obj){
               var item = $(obj);
               var itemId = item.attr('id');
               var anchorTopStop = item.data('anchor-area');
               item.removeAttr('id');
               item.before('<span class="anchor-node" id="' + itemId + '"></span>');
               if( anchorTopStop !== true){
                   item.prev().css({'top': anchorTopStop +'px'});
               }
          });
          
    
            $(document).on('click','[data-scroll-link][href^="#"]',function(event) {
                  event.preventDefault();
                  var item = $(this);
                  var target = item.attr('href');
                  
                  var $target = $(target);
                  var top = $(window).width() <= 992 ? $target.offset().top - 50 : $target.offset().top + 20;
                      $(scrollElement).stop().animate({
                          'scrollTop': top
                      }, $(window).width() <= 992 ? 0 : 800, 'swing');
                      
                  if(item.parents('.pa--main-menu').hasClass('active')){
                        item.parents('.pa--main-menu').removeClass('active');
                  }
                  
            });
          
     }
       
       

	//slider team
	function mobileOnlySlider() {
            $('.pa--slider-modules').slick({
                  dots: true,  
                  arrows: false,
                  autoplay: true,
                  speed: 1000, 
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  autoplaySpeed: 5000,
                  responsive: [
                        {
                          breakpoint: 767,
                          settings: { 
                              slidesToShow: 3,
                              slidesToScroll: 3,
                          }
                        },
                          {
                              breakpoint: 560,
                              settings: { 
                                slidesToShow: 2,
                                slidesToScroll: 2 
                              }
                          },
                          {
                              breakpoint: 400,
                              settings: { 
                                slidesToShow: 1,
                                slidesToScroll: 1 
                              }
                          }
                  ]
            });
	}
	 
  
}(jQuery));