let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

$(document).ready(function(){
	$('body').append('<a href="#" id="go-top" title="Totop">To top</a>');
  });
  $(function() {
   $.fn.scrollToTop = function() {
	$(this).hide().removeAttr("href");
	if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	var scrollDiv = $(this);
	$(window).scroll(function() {
	 if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	 else $(scrollDiv).fadeIn("slow")
	});
	$(this).click(function() {
	 $("html, body").animate({scrollTop: 0}, "slow")
	})
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();
  });
  