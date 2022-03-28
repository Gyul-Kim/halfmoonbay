<link rel="stylesheet" type="text/css" href="/pop/css/swiper.css" />
<script type="text/javascript" src="/pop/js/swiper.js"></script>	

<script type="text/javascript">
$(function(){
	var popup = new Swiper('#popup .swiper', {
		pagination: '#popup .swiper-pagination', 
		nextButton: '#popup .swiper-button-next',
		prevButton: '#popup .swiper-button-prev', 
		slidesPerView: 1, 
		paginationClickable: true, 
		spaceBetween: 0,	
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: true,
	});

	$("#popup .close").on("click", function(){ $("#popup").remove(); return false; });
	
	 $(".plays").click(function(){
		 if($(this).find("img").is(".on") == true){
			$(".plays img").removeClass("on");
			$(".plays img").attr("src","/pop/images/wait.png");
			popup.startAutoplay();	
		 }else{
			$(this).find("img").addClass("on");
			$(".plays img").attr("src","/pop/images/play.png");
			popup.stopAutoplay();	
		 }
		return false;	
	});
	
});
</script>

<style type="text/css">
#popup{ top:150px;right:80px; }
@media (max-width: 800px) {
  #popup{ top:180px;right:50px; }
}
</style>

<div id="popup" class="">
	<div class="swiper-container swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<a href="#" onclick="return false;" class="pop_img"><img src="/pop/pop_04.jpg" alt="" width="350" height="auto" /></a>
			</div>
			<div class="swiper-slide">
				<a href="#" onclick="return false;" class="pop_img"><img src="/pop/pop_03.jpg" alt="" width="350" height="auto" /></a>
			</div>
			<div class="swiper-slide">
				<a href="#" onclick="return false;" class="pop_img"><img src="/pop/pop_02.jpg" alt="" width="350" height="auto" /></a>
			</div>
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-next s-btn"></div>
		<div class="swiper-button-prev s-btn"></div>
	</div>
	<a href="#" class="plays"><img src="/pop/images/wait.png" alt="" width="54" height="50" /></a>
	<a href="#" class="close"><img src="/pop/images/close.png" alt="닫기" width="54" height="50"></a>
</div>