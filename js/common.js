//document.write('<script type="text/javascript" src="js/swipe.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/reserve.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="js/modify.js"></script>');		// 함수 리스트 호출
document.write(
"<!--[if lte IE 9]>"
+ "<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>"
+ "<script type='text/javascript'>alert('브라우저를 최신 버전으로 업그레이드하세요.'); window.open('https://outdatedbrowser.com/ko','_blank');</script>"
+ "<![endif]-->"
);

$(function(){
/*---------------------------------------------------------------*/	
//common
var video = document.getElementById("MyVideo");
var dht = $(window).height();
var dwh = $(window).width();

var num = location.href.substr(location.href.lastIndexOf('_') + 1);
var val = num.slice(0, 2);
	val = val - 1;
let detailPath = ((location.href.substr(location.href.lastIndexOf("=") + 1)).slice(0, 2) - 1 + 1) - 1; //detail Path


/*---------------------------------------------------------------*/	
//header
$("#header #gnb > ul > li").hover(function(){
	$(this).addClass("active");
	$(this).find("ul").stop(true,true).slideDown(350);
},function(){
	$(this).removeClass("active");
	$(this).find("ul").stop(true,true).slideUp(350);
});
/*---------------------------------------------------------------*/
//index
if($("body").is("#index") == true){
	fullpage(800);

	//1st movie
	videoControl(video);

	// title
	$(".idx_mov_ttl").css({"opacity":"1","transform":"translateY(0)"});

	// 2nd movie
	$(function(){
		var iframe = document.getElementById("movie"); var player = new Vimeo.Player(iframe);
		$("#movie").css({'min-width':'100%','min-height':'100%','width':'auto','height':'auto','position':'absolute','top':'50%','left':'50%','transform':'translate(-50%,-50%)','object-fit':'cover'});
		$("#movie iframe").css("height",window.outerWidth / 16 * 9);
		$(window).resize(function(){$(".MyFrames iframe").css("height",window.outerWidth / 16 * 9);});
	});
;
	

/*---------------------------------------------------------------*/
//video	
}else if($("body").is("#video") == true){
	parallax('',500);	
	
/*---------------------------------------------------------------*/		
//landscape
}else if($("body").is("#landscape") == true){	
	fullpage(800);
	videoControl(video);
	

	$("#landscape h2").css({"opacity":"1","transform":"translateY(0)"});

	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',
	function(data){
		$("#landscape h3").append(
			'<b>오시는길</b>' +
			'<strong>Above the beautiful scenery<em>LOCATION</em></strong>' +
			'<span>도로명 주소 | '+ data.result.NEW_USER_ADDR +'</span>' +
			'<span>지번 주소 | '+ data.result.USER_ADDR +'</span>'
		);
	});
		
/*---------------------------------------------------------------*/		
//travel
}else if($("body").is("#travel") == true){	
	//travel scroll
	$("#scroll a").on("click",function(){
		$("html,body").stop().animate({scrollTop:$(".section").eq(1).offset().top - 50},700);
		return false;
	});

	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/10',
		function(data){ 

			var i = 0;
			$(".contents .InnerBox .frame").append("<ul></ul>");
			$.each(data.result,function(key,val){
				for(var j = 0; j < data.result.length; j++) {
					if (Number(data.result[j]["ORDER_NUM"]) - 1 === i) {
						$(".frame ul").append(
							'<li>' +
								'<img src="images/travel/'+ (i + 1) +'.jpg" alt="" width="100%" height="auto" />' +
								'<strong>' + data.result[j]["TITLE"] + '</strong>' +
								'<em>' + data.result[j]["DISTANCE"] + '</em>' +
								'<span>'+ data.result[j]["CONTENT"] +'</span>' +
							'</li>'
						);
					}
				}
				i++;
			});
		});
		parallax('',500);
//food
}else if($("body").is("#food") == true){	
	//travel scroll
	$("#scroll a").on("click",function(){
		$("html,body").stop().animate({scrollTop:$(".section").eq(1).offset().top - 50},700);
		return false;
	});

	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/12',
		function(data){ 

			var i = 0;
			$(".contents .InnerBox .frame").append("<ul></ul>");
			$.each(data.result,function(key,val){
				for(var j = 0; j < data.result.length; j++) {
					if (Number(data.result[j]["ORDER_NUM"]) - 1 === i) {
						$(".frame ul").append(
							'<li>' +
								'<img src="images/food/'+ (i + 1) +'.jpg" alt="" width="100%" height="auto" />' +
								'<strong>' + data.result[j]["TITLE_KR"] + '</strong>' +
								'<em>' + data.result[j]["CONTENT1"] + '</em>' +
								'<span>'+ data.result[j]["CONTENT"] +'</span>' +
							'</li>'
						);
					}
				}
				i++;
			});
		});
		parallax('',500);

		$("#food .Swipers").append(
			'<div class="swiper-view">' +
				'<div class="InBox">' +
					'<div class="swiper-container swiper">' +
						'<div class="swiper-wrapper swiper-image"></div>' +
						'<div class="swiper-button-next swiper-btn"></div>' +
						'<div class="swiper-button-prev swiper-btn"></div>' +
						'<div class="swiper-pagination"></div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="best_">' +
				'<b>BEST</b>' +
				'<strong>구계항 등대펜션 식당</strong>' +
				'<span>펜션에서 도보 2분 거리</span>' +
				'<p><span>주소 : 경북 영덕군 남정면 구계길 8-7</span><span>전화 : 054-733-0096</span><span>추천 메뉴 : 박달대게, 자연산 참가자미회, 참가자미 물회</span><span>* 펜션 예약시 메뉴를 미리 주문하여 주시면 하프문베이 고객만을 위한 메뉴로 룸서비스를 진행하여 드립니다.</span><span>- 자연산 참가자미 5만원+매운탕 2만원 =7만원</span>' +
				'</p>' +
			'</div>'
		);

		for(var i = 0; i < 4; i++){
			$("#food .Swipers .swiper-image").append(
				'<div class="swiper-slide">' + 
					'<div style="background-image:url(' + url + '/food/' + (i + 1) + '.jpg)"></div>' + 
				'</div>'
			);
		} Swipers(".Swipers", "auto", true, 100, false);
/*---------------------------------------------------------------*/		
} else if($("body").is("#map") == true){	
	//travel scroll
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',
	function(data){
		$("#location h3").append(
			'<b>오시는길</b>' +
			'<strong>Above the beautiful scenery<em>LOCATION</em></strong>' +
			'<span>도로명 주소 | '+ data.result.NEW_USER_ADDR +'</span>' +
			'<span>지번 주소 | '+ data.result.USER_ADDR +'</span>'
		);
	});
	parallax('',500);

//room - detail
}else if($("body").is("#room") == true){ 	
	var num = num.slice(0, 2); $("body").addClass("room_" + num);
	// $("body").addClass("room_" + numbering(num));	
	fullpage(800);
	
	//객실정보
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/8',//실시간예약 객실정보 URL
	function(data){
		
		var cnt = val;
		
		var names = data.result[cnt]["TYPE_NM_EN"];				//객실이름
		var names_KR = data.result[cnt]["TYPE_NM"];				//객실이름
		var wdth = data.result[cnt]["ROOM_EXTN"];				//객실평수
				
		var adlt = data.result[cnt]["ADLT_BASE_PERS"];			//기준인원
		var adlt_max = data.result[cnt]["ADLT_MAX_PERS"];		//최대인원
		var etc = data.result[cnt]["ETC_DETL"];					//기타상세
		
		var types = data.result[cnt]["ROOM_TYPE"];				//객실타입
		var intr = data.result[cnt]["INTERIOR"];				//비품안내
		
		var adlt_prce = data.result[cnt]["ADLT_EXCS_PRCE"];		//추가요금 성인
		var kids_prce = data.result[cnt]["KIDS_EXCS_PRCE"];		//추가요금 아동
	
		

		$("#container").prepend(
			'<div class="btn"><span>OceanView Place</span><strong>'+  names +'<em>(' + etc +')</em></strong><a href="#"><span>Detail View</span><b></b></a></div>' +
			'<div class="info">' +
				'<div class="inner">' +
					'<span>CONDITION & AMENITIES</span>' +
					
					'<ul>' +
						'<li>객실 : '+ names +' | '+ wdth +' | 기준 '+ adlt +'명 - 최대 '+ adlt_max +'명</li>' +
						'<li>'+ types +'</li>' +
						'<li>기준 추가요금 | 성인 '+ adlt_prce +'원 / 아동 '+ kids_prce +'원</li>' +
					'</ul>' +
					
					'<ul><li>'+ intr +'</li></ul>' +
				'</div>' +
				'<div class="close"><a href="#"><i class="xi-close-thin"></i></a></div>' +
			'</div>' +
			'<div class="cont_bg"></div>' 
		);

		// 처음 시작시 2초 켜졌다가 꺼지기
		setTimeout(function() {
			$("#container .info").css({"display":"none"});
			$(".cont_bg").css({"display":"none"});
		},8000);
		
		// room btn
		$(".btn a").on("click",function(){
			$(".info").fadeIn();
			$(".info .inner,.info .close").css({
				"opacity":"1",	
				'-webkit-transition': 'all 0.5s 0.2s ease-in',
				'-ms-transition': 'all 0.5s 0.2s ease-in',
				'transition': 'all 0.5s 0.2s ease-in'
			});
			$(".cont_bg").css({"display":"block"});
			return false;
		});
		
		//close
		$(".close a").on("click",function(){
			$(".info").fadeOut();
			$(".info .inner,.info .close").css({
				"opacity":"0",	
				'-webkit-transition': 'all 0.3s ease-out',
				'-ms-transition': 'all 0.3s ease-out',
				'transition': 'all 0.3s ease-out'
			});
			$(".cont_bg").css({"display":"none"});
			return false;
		});
		
		$(".cont_bg").on("click", function() {
			$(".info").fadeOut();
			$(".cont_bg").css({"display":"none"});
		});
	});
/*---------------------------------------------------------------*/		
//special
}else if($("body").is("#special") == true){	
	$("body").addClass("special_" + numbering(detailPath));

	for(var i = 0; i < img[3][detailPath]; i++){
		$("#fullpage").prepend(
			'<div class="section" style="background-image:url('+ url + '/special/' + (detailPath + 1) + '/' + (i + 1) +'.jpg); background-size:cover;"></div>'
		); 
	} 

	fullpage(800);

	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/9',//실시간예약 객실정보 URL
	function(data){
		var special_num = new Array();
		for(var i = 0; i < data.result.length; i++) {
			for(var j = 0; j < data.result.length; j++) {
				if(Number(data.result[j]["ORDER_NUM"]) - 1 === i) special_num.push(data.result[j]);
			}
		}
		
		$("#container").prepend(
			'<div class="btn"><span>' + special_num[detailPath]["TITLE_KR"] +'</span><strong>' + special_num[detailPath]["TITLE_EN"] +'</strong><a href="#"><span>Detail View</span><b></b></a></div>' +
			'<div class="info">' +
				'<div class="inner">' +
					'<span>INFORMATION</span>' +
					
					'<ul>' +
						'<li>' + special_num[detailPath]["CONTENT"] + '</li>' +
					'</ul>' +
				'</div>' +
				'<div class="close"><a href="#"><i class="xi-close-thin"></i></a></div>' +
			'</div>' +
			'<div class="cont_bg"></div>' 
		);


		// 처음 시작시 2초 켜졌다가 꺼지기
		setTimeout(function() {
			$("#container .info").css({"display":"none"});
			$(".cont_bg").css({"display":"none"});
		},8000);

		$(".btn a").on("click",function(){
			$(".info").fadeIn();
			$(".info .inner,.info .close").css({
				"opacity":"1",	
				'-webkit-transition': 'all 0.5s 0.2s ease-in',
				'-ms-transition': 'all 0.5s 0.2s ease-in',
				'transition': 'all 0.5s 0.2s ease-in'
			});
			$(".cont_bg").css({"display":"block"});
			return false;
		});
		
		//close
		$(".close a").on("click",function(){
			$(".info").fadeOut();
			$(".info .inner,.info .close").css({
				"opacity":"0",	
				'-webkit-transition': 'all 0.3s ease-out',
				'-ms-transition': 'all 0.3s ease-out',
				'transition': 'all 0.3s ease-out'
			});
			$(".cont_bg").css({"display":"none"});
			return false;
		});
		
		$(".cont_bg").on("click", function() {
			$(".info").fadeOut();
			$(".cont_bg").css({"display":"none"});
		});
	});

// cafe
}else if($("body").is("#cafe") == true) {
	fullpage(800);
	videoControl(video);

	$("#cafe h2").css({"opacity":"1","transform":"translateY(0)"});

	$("#container").prepend(
		'<div class="btn"><span>OceanView</span><strong>Cafe</strong><a href="#"><span>Detail View</span><b></b></a></div>' +
		'<div class="info">' +
				'<div class="inner">' +
					'<ul>' +
						'<li><img src="images/cafe_menu.jpg" alt="" width="550" height="auto"></li>' +
					'</ul>' +
				'</div>' +
				'<div class="close"><a href="#"><i class="xi-close-thin"></i></a></div>' +
			'</div>' +
			'<div class="cont_bg"></div>' 
	);

	// 처음 시작시 2초 켜졌다가 꺼지기
	setTimeout(function() {
		$("#container .info").css({"display":"none"});
		$(".cont_bg").css({"display":"none"});
	},8000);

	$(".btn a").on("click",function(){
		$(".info").fadeIn();
		$(".info .inner,.info .close").css({
			"opacity":"1",	
			'-webkit-transition': 'all 0.5s 0.2s ease-in',
			'-ms-transition': 'all 0.5s 0.2s ease-in',
			'transition': 'all 0.5s 0.2s ease-in'
		});
		$(".cont_bg").css({"display":"block"});
		return false;
	});
	
	//close
	$(".close a").on("click",function(){
		$(".info").fadeOut();
		$(".info .inner,.info .close").css({
			"opacity":"0",	
			'-webkit-transition': 'all 0.3s ease-out',
			'-ms-transition': 'all 0.3s ease-out',
			'transition': 'all 0.3s ease-out'
		});
		$(".cont_bg").css({"display":"none"});
		return false;
	});
	
	$(".cont_bg").on("click", function() {
		$(".info").fadeOut();
		$(".cont_bg").css({"display":"none"});
	});

/*---------------------------------------------------------------*/
//reserve	
}else if($("body").is("#reserve") == true){
	
	$(".content .snb li a").on("click",function(){
		var nb = $(this).parent("li").index();
		$(".content .snb > li").removeClass("active");
		$(".content .snb > li").eq(nb).addClass("active");
		if(nb == 0){
			$("#Banner h2.ttls span").text("실시간예약");
			$("#Banner h2.ttls strong").text("RESERVATION");
			$(".thumbs").hide(); $(".tab_01").show();
		}else if(nb == 1){
			$("#Banner h2.ttls span").text("예약안내");
			$("#Banner h2.ttls strong").text("GUIDE");
			$(".thumbs").hide(); $(".tab_02").show();
		}return false;
	});
	
	reserInfo(rv_ttl); parallax('',500);

	
/*---------------------------------------------------------------*/
//community	
}else if($("body").is("#community") == true){
	
	$(".content .snb li a").on("click",function(){
		var nb = $(this).parent("li").index();
		$(".content .snb > li").removeClass("active");
		$(".content .snb > li").eq(nb).addClass("active");
		if(nb == 0){
			$("#Banner h2.ttls span").text("공지사항");
			$("#Banner h2.ttls strong").text("NOTICE");
			$(".thumbs iframe").attr("src","/board/bbs/board.php?bo_table=notice");
		}else if(nb == 1){
			$("#Banner h2.ttls span").text("후기 게시판");
			$("#Banner h2.ttls strong").text("REVIEW");
			$(".thumbs iframe").attr("src","/board/bbs/board.php?bo_table=qa");
		}
		return false;
	});

	parallax('',500);
	
}
	
/*------------------------------------------------------------------------------------------------*/
//footer
$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',//사업자 정보
function(data){
		const USER_TEL1 = data.result.USER_TEL1;				//전화번호 1
		const USER_TEL2 = data.result.USER_TEL2;				//전화번호 2
		const NEW_USER_ADDR = data.result.NEW_USER_ADDR;		//도로명주소
		const USER_ADDR = data.result.USER_ADDR;				//지번주소
		const BUSI_NM = data.result.BUSI_NM;					//상호명
		const USER_ACCO = data.result.USER_ACCO;				//계좌번호
		const COMM_SALE_NO = data.result.COMM_SALE_NO;			//통신판매업번호

		$("#footer .fp-tableCell").append(
			'<div class="inner">' +
				'<div class="top">' +
					'<div class="text-logo">' +
						'<img src="images/footer_logo_text.png" alt="">' +
					'</div>' +
					'<div class="icons">' +
						'<a class="icon sns_01" target="_blank">' +
							'<img src="images/footer_icon_sns.png" alt="" width="25px" height="auto">' +
						'</a>' +
						'<a class="icon" href="#">' +
							'<img src="images/footer_icon_blog.png" alt="" width="27px" height="auto">' +
						'</a>' +
						'<a href="reserve.html" class="icon">' +
							'<img src="images/icon_reserve.png" alt="" width="32px" height="auto" style="opacity: 0.8;">' +
						'</a>' +
					'</div>' +
				'</div>' +
				'<div class="middle">' +
					'<div>' +
						'<img src="images/footer_logo.png" alt="" width="220" height="auto">' +
					'</div>' +
					'<div>' +
						'<i class="xi-maker"></i>' +
						'<p>ADDRESS</p>' +
						'<span></span>' +
					'</div>' +
					'<div>' +
						'<i class="xi-call"></i>' +
						'<p>PHONE</p>' +
						'<span></span>' +
					'</div>' +
				'</div>' +
				'<div class="bottom"></div>' +
				'<p class="copyright">홈페이지 제작 &nbsp;&nbsp;<a href="http://gonylab.com/" target="_blank">GONYLAB</a></p>' +
			'</div>' 
		);

		$("footer .middle>div:nth-child(2) span").append(NEW_USER_ADDR);
		$("footer .middle>div:nth-child(3) span").append(USER_TEL2);


		//사업자 정보	
		$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/11', //User Info
		function(data){
			let BUSI_PRE_NM = new Array(); 						//대표자
			let BUSI_NO = new Array();							//사업자번호
			$.each(data.result,function(key,val){
				BUSI_PRE_NM.push(val["BUSI_PRE_NM"]); BUSI_NO.push(val["BUSI_NO"]);
				$(".BUSI_PRE_NM").text(BUSI_PRE_NM); $(".BUSI_NO").text(BUSI_NO);
			});
			$("footer .bottom").append(
				'<p>상호명 : ' + BUSI_NM + ' / 대표 : ' + BUSI_PRE_NM + '</p>'+
				'<p>사업자등록번호 : ' + BUSI_NO + '</p>'+
				'<p>통신판매업신고번호 : ' + COMM_SALE_NO + '</p>'
			);
			});

	$(".sns_01").attr("href",instagram); 
	$(".sns_02").attr("href",facebook); 
	$(".sns_03").attr("href",blog);

	if(instagram == "#"){$(".sns_01").click(function(){alert('준비중입니다.');return false;});}
	if(facebook == "#"){$(".sns_02").click(function(){alert('준비중입니다.');return false;});}
	if(blog == "#"){$(".sns_03").click(function(){alert('준비중입니다.');return false;});}
	
	//사업자 정보	
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/11', //사업자 정보
	function(data){
		var arr1 = new Array();
		var arr2 = new Array();
		
		$.each(data.result,function(key,val){
			arr1.push(val["BUSI_PRE_NM"]);
			arr2.push(val["BUSI_NO"]);

			$(".BUSI_PRE_NM").text(arr1);
			$(".BUSI_NO").text(arr2);
		});
	
	});
	
});
});	

/*------------------------------------------------------------------------------------------------*/
//function
function fullpage(speed){
	var fullpage = $('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		//autoScrolling: true,
		scrollingSpeed: speed,
		scrollHorizontally: true,
		navigation: true,
		navigationPosition: 'right',
		onLeave: function(s, n, b){
			var total = $(".section").length - 1;
			if(b == "down"){
				if(n.index == total){
					$("#fp-arrow p span").text(s.index + 1);
					$("#scroll").hide();
					$(".idx_mov_ttl").hide();
					
					if($("body").is(".sub") == true) $(".btn").hide();
				}else if(n.index == total - 1) {
					$(".idx_mov_ttl").hide();
				}else{
					$("#fp-arrow p span").text(n.index + 1);
					$("#scroll img").attr("src","images/scroll_b.jpg");
					$("#scroll").show();
					$(".idx_mov_ttl").show();

					if($("body").is(".sub") == true) $(".btn").show();
					
				}
			}else if(b == "up") {
				if(n.index == total - 1) {
					$("#fp-arrow p span").text(s.index - 1);
					$(".idx_mov_ttl").hide();
					$("#scroll").hide();

					if($("body").is(".sub") == true) $(".btn").show();
				} else if(n.index == total - 2) {
					$(".idx_mov_ttl").show();
					$("#scroll").show();

					if($("body").is(".sub") == true) $(".btn").show();
				}
			}else{
				$("#fp-arrow p span").text(n.index + 1);
				$("#scroll").delay(700).fadeIn(500,"easeInOutCubic");
				$(".idx_mov_ttl").delay(700).fadeIn(500,"easeInOutCubic");

				
			 $("#scroll img").attr("src","images/scroll_b.jpg");
				
				if($("body").is(".sub") == true) $(".btn").delay(700).fadeIn(500,"easeInOutCubic");
			}
			
			
			if($("body").is(".vid") == true){
				var video = document.getElementById("MyVideo");
				if($("body").is("#index") == true){
					var iframe = document.getElementById("MyFrame"); var player = new Vimeo.Player(iframe);
					if(s.index == 1 && b == 'up') player.play();
					else player.pause();
					
				}else{
					if(s.index == 1 && b == 'up') video.play();
					else video.pause();	
				}
			}
			
		}
		
	});
		
	//fp-arrow
	$("#fp-arrow").append(
		'<a href="#" class="fp-prev"><span class="alt">이전</span></a>' +
		'<p><span>1</span> / '+ ($(".section").length - 1) + '</p>' +
		'<a href="#" class="fp-next"><span class="alt">다음</span></a>'
	);
	
	//fp-scroll
	$("#container").append('<div id="scroll"><a href="#"><img src="images/scroll_b.jpg" alt="" width="59" height="64" /></a></div>');

	//fp-arrow - btn
	$(".fp-prev").on("click",function(){$.fn.fullpage.moveSectionUp();return false;});
	$(".fp-next").on("click",function(){$.fn.fullpage.moveSectionDown();return false;});

	//fp-scroll - btn
	$("#scroll").on("click",function(){$.fn.fullpage.moveSectionDown();return false;});
	
	//fp-nav - last - remove
	$("#fp-nav ul li").eq($("#fp-nav ul li").length - 1).hide();
}


function parallax(v,h){
	$(window).on("scroll",function(){
		var agent = navigator.userAgent.toLowerCase(); var poX = $(this).scrollTop();
	
		//익스플로러 체크
		//if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)){}else{}
		
		$("#banner").css({
			'-webkit-transform': 'translate3d(0, ' + parseInt(-poX / 2)  +'px, 0)',
			'-ms-transition': 'translate3d(0, ' + parseInt(-poX / 2)  +'px, 0)',
			'transform': 'translate3d(0, ' + parseInt(-poX / 2)  +'px, 0)',
		});
		
	});
}

function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}

//function - video
function videoControl2(control){
	
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $(".movie").offset().top;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.play();
		else player.pause();
		
	});
}

//function - video
function videoControl(control){
	videoScale(control);
	$(window).on("resize",function(){
		videoScale(control);
	});
	$(window).on("scroll",function(){
		var thisTop = $(this).scrollTop();
		var stopTop = $("section > div:first-child").height() - 100;
		var player = new Vimeo.Player(control);
		if(thisTop > stopTop) player.pause();
		else player.play();
	});
}

//function - videocontrol
function videoScale(control){
	control.style.width = Math.round($(window).height() / 9 * 16) + "px";
	control.style.height = Math.round($(window).width() / 16 * 9) + "px";
}

//function - swipers
function Swipers(value, view, center, Between, boolean){
	var swiper = new Swiper(value + ' .swiper', {
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
		slidesPerView: view,
		centeredSlides: center,
		spaceBetween: Between,
		loop: boolean
	});
}