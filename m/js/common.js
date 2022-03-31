document.write('<script type="text/javascript" src="../js/swiper.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="../js/modify.js"></script>');	// 함수 리스트 호출
document.write('<script type="text/javascript" src="../js/reserve.js"></script>');	// 함수 리스트 호출
$(function(){
/* -------------------------------------------------------------------------------------------- */
var dht = $(window).height();
var dwh = $(window).width();
let detailPath = ((location.href.substr(location.href.lastIndexOf("=") + 1)).slice(0, 2) - 1 + 1) - 1; //detail Path

 
/* -------------------------------------------------------------------------------------------- */
/* gnb */	
$("nav > ul > li.gb > a").click(function(){
	var targ = $(this).attr("href"); targ = targ.split("#");
	var targNo = $(this).parent("li").index();
	var selElem = targ[1];
	var elemHeight = $("nav div." + selElem + " ul").height();
	var dtime = 0;
	$("nav > ul > li > a").removeClass("active");	
	$("nav > ul > li").each(function(i){
		if(i == targNo){
			if($("nav div." + targ[1]).height() == 0) $(this).find("a").addClass("active");
			else $("nav > ul > li a").removeClass("active");
		}
	});
	$("nav div").each(function(){if($(this).attr("class") != selElem){if($(this).height() != 0){dtime = 500;}}});
	$("nav div").each(function(){
		if($(this).attr("class") == selElem){
			if($(this).height() == 0){$(this).delay(dtime).animate({"height":elemHeight},300);}
			else{$(this).animate({"height":0},300);}
		}else{$(this).animate({"height":0},300);}
	});return false;
});

/* -------------------------------------------------------------------------------------------- */
/* scroll */
$(window).on('scroll', function(){
	var now = $(this).scrollTop();
	if(now >= 0){
		$("nav > ul > li > a").removeClass("active"); 
		$("nav div").stop(true,false).animate({"height":0},300);	
	}
});

/* -------------------------------------------------------------------------------------------- */	
/* visual */
var num = location.href.substr(location.href.lastIndexOf('_') + 1);
var val = num.slice(0, 2);
	val = val - 1;

//scroll	
$("#visual #scroll a").on("click",function(){
	$("html,body").animate({scrollTop:$("#scroll_btm").position().top - 165},500);
	return false;
});

/* -------------------------------------------------------------------------------------------- */	
//index
	
if($("section").is("#index") == true){
	$("#visual").append("<div><img src='http://gonylab8.speedgabia.com/halfmoonbay/m/main/1.jpg' alt='' width='100%' height='auto'></div>");

	for(var i = 1; i < img[0][0]; i++) {
		$("#index .i-list").append(
			'<div><img src="' + url +  '/m/main/' + (i + 1) + '.jpg" alt="" width="100%" height="auto"/></div>'
		);
	
	}
	console.log(img[0][0]);
/* -------------------------------------------------------------------------------------------- */	
//ladnscape
}else if($("section").is("#landscape") == true){

	$("#visual").append("<div><img src='http://gonylab8.speedgabia.com/halfmoonbay/m/exterior/1.jpg' alt='' width='100%' height='auto'></div>");

	for(var i = 1; i < img[1][0]; i++) {
		$("#landscape .i-list").append(
			'<div><img src="' + url +  '/m/exterior/' + (i + 1) + '.jpg" alt="" width="100%" height="auto"/></div>'
		);
	}
	
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/4',
	function(data){
		$("#landscape h3").append(
			'<b>오시는길</b>' +
			'<strong>Above the beautiful scenery<em>LOCATION</em></strong>' +
			'<span>도로명 주소 | '+ data.result.NEW_USER_ADDR +'</span>' +
			'<span>지번 주소 | '+ data.result.USER_ADDR +'</span>'
		);
	});
/* -------------------------------------------------------------------------------------------- */	
//rooms
}else if($("section").is("#rooms") == true){
	$("body").addClass("room_" + numbering(detailPath));
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/8',//실시간예약 객실정보 URL
	function(data){
			
		var names = data.result[detailPath]["TYPE_NM"];				//객실이름
		var wdth = data.result[detailPath]["ROOM_EXTN"];				//객실평수
				
		var adlt = data.result[detailPath]["ADLT_BASE_PERS"];			//기준인원
		var adlt_max = data.result[detailPath]["ADLT_MAX_PERS"];		//최대인원
		var etc = data.result[detailPath]["ETC_DETL"];					//기타상세
		
		var types = data.result[detailPath]["ROOM_TYPE"];				//객실타입
		var intr = data.result[detailPath]["INTERIOR"];				//비품안내
		
		var adlt_prce = data.result[detailPath]["ADLT_EXCS_PRCE"];		//추가요금 성인
		var kids_prce = data.result[detailPath]["KIDS_EXCS_PRCE"];		//추가요금 아동


		for(var i = 0; i < 1; i++) {
			$("#rooms #visual").append(
				'<div><img src="' + url +  '/m/room/' + (detailPath + 1) + '/' + '1.jpg" alt="" width="100%" height="auto"/></div>'
			);
		}

		for(var i = 1; i < img[2][detailPath]; i++) {
			$("#rooms .i-list").append(
				'<div><img src="' + url +  '/m/room/' + (detailPath + 1) + '/' + (i + 1) + '.jpg" alt="" width="100%" height="auto"/></div>'
			);
		}
	
		$(".info").prepend(
			'<h2><span>OceanView Place</span>'+ names +'</h2>' +
			'<ul>' +
				'<li>CONDITION & AMENITIES</li>' +
				'<li>'+ wdth +'평형 | 기준 '+ adlt +'명 - 최대 '+ adlt_max +'명</li>' +
				'<li>'+ types +'</li>' +
				'<li>기준 추가요금 | 성인 '+ adlt_prce +'원 / 아동 '+ kids_prce +'원</li>' +
			'</ul>'	+
			'<ul class="eq">' +
				'<li>' + intr + '</li>' +  
			'</ul>'
		);

		for(var e = 0; e < INTERIOR.length; e++) $(".eq").append('<li>' + INTERIOR[e] + ',</li>');	
		var last = $(".eq li").eq(INTERIOR.length - 1).text().replace(/,/g, '');
		$(".eq li").eq(INTERIOR.length - 1).text(last);
	});
/* -------------------------------------------------------------------------------------------- */	
//special
}else if($("section").is("#special") == true){
	$("body").addClass("special_" + numbering(detailPath));

	$("#special #visual").append(
		'<div><img src="' + url + '/m/special/' + (detailPath + 1) + '/' + '1.jpg" alt="" width="100%" height="auto"/></div>'
	);

	for(var i = 1; i < img[3][detailPath]; i++){
		$("#special .i-list").append(
			'<div><img src="' + url + '/m/special/' + (detailPath + 1) + '/' + (i + 1) +'.jpg" alt="" width="100%" height="auto"/></div>'
		);
	}

	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/9',//실시간예약 객실정보 URL
	function(data){
		
		var special_num = new Array();
		for(var i = 0; i < data.result.length; i++) {
			for(var j = 0; j < data.result.length; j++) {
				if(Number(data.result[j]["ORDER_NUM"]) - 1 === i) special_num.push(data.result[j]);
			}
		}
	
		$(".info").prepend(
			'<h2><span>' + special_num[detailPath]["TITLE_EN"] + '</span>'+ special_num[detailPath]["TITLE_KR"] +'</h2>' +
			'<ul>' +
				'<li>INFORMATION</li>' +
				'<li>'+ special_num[detailPath]["CONTENT"] + '</li>' 
		);

	});

/*---------------------------------------------------------------*/	
}else if($("section").is("#cafe") == true){
	for(var i = 0; i < img[4][0]; i++){
		$("#cafe .i-list").append(
			'<div><img src="' + url + '/m/cafe/' + (i + 1) +'.jpg" alt="" width="100%" height="auto"/></div>'
		);
	}
/* travel */
}else if($("section").is("#travel") == true){
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/10',//주변여행지 정보
	function(data){
		let i = 0;
		
		$.each(data.result,function(key,val){
			var names = val["TITLE"];
			var times = val["DISTANCE"];
			var contents = val["CONTENT"];
			
			$(".contents .list").append(
				'<li class="lists"><div class="img"><img src="../images/travel/'+ (i + 1) +'.jpg" alt="" width="100%" height="auto" /></div>' +
					'<div class="txt">' +
						'<h4><strong>'+ names +'</strong><span>[펜션에서 약 '+ times +' 분 거리]</span></h4><p>'+ contents +'</p>' +
					'</div>' +
				'</li>'
			);
			if(val["DISTANCE"] == "0") $(".tcont h4 span").text('[펜션바로 앞]');
			i++;
		});
	});		
/* food */
}else if($("section").is("#food") == true){
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/'+ rv_ttl +'/12',//주변여행지 정보
	function(data){
		let i = 0;
		
		$.each(data.result,function(key,val){
			var names = val["TITLE_KR"];
			var content1 = val["CONTENT1"];
			var contents = val["CONTENT"];
			
			$(".contents .list").append(
				'<li class="lists"><div class="img"><img src="../images/food/'+ (i + 1) +'.jpg" alt="" width="100%" height="auto" /></div>' +
					'<div class="txt">' +
						'<h4><strong>'+ names +'</strong><span>[펜션에서 약 '+ content1 +' 분 거리]</span></h4><p>'+ contents +'</p>' +
					'</div>' +
				'</li>'
			);
			if(val["DISTANCE"] == "0") $(".tcont h4 span").text('[펜션바로 앞]');
			i++;
		});
	});
	
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
	


/* -------------------------------------------------------------------------------------------- */	
//reserve	
}else if($("section").is("#reserve") == true){
	$(".content .snb li a").on("click",function(){
		var nb = $(this).parent("li").index();
		$(".content .snb > li").removeClass("active");
		$(".content .snb > li").eq(nb).addClass("active");
		if(nb == 0){
			$("#banner h2.ttls span").text("실시간예약");
			$("#banner h2.ttls strong").text("RESERVATION");
			$(".thumbs").css("display","none"); 
			$(".tab_01").css("display","block");
		}else if(nb == 1){
			$("#banner h2.ttls span").text("실시간예약");
			$("#banner h2.ttls strong").text("RESERVATION");
			$(".thumbs").css("display","none"); 
			$(".tab_02").css("display","block");
		}return false;
	});reserInfo(rv_ttl);
	
/*---------------------------------------------------------------*/
//community
}else if($("section").is("#community") == true){
	
	$(".content .snb li a").on("click",function(){
		var nb = $(this).parent("li").index();
		$(".content .snb > li").removeClass("active");
		$(".content .snb > li").eq(nb).addClass("active");
		if(nb == 0){
			$("#banner h2.ttls span").text("공지사항");
			$("#banner h2.ttls strong").text("NOTICE");
			$(".thumbs iframe").attr("src","/board/bbs/board.php?bo_table=notice");
		}else if(nb == 1){
			$("#banner h2.ttls span").text("후기 게시판");
			$("#banner h2.ttls strong").text("REVIEW");
			$(".thumbs iframe").attr("src","/board/bbs/board.php?bo_table=qa");
		}return false;
	});
	
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

		$("footer").append(
			'<div class="inner">' +
				'<div class="top">' +
					'<div class="text-logo">' +
						'<img src="../images/footer_logo_text.png" alt="" width="200" height="auto">' +
					'</div>' +
					'<div class="icons">' +
						'<a class="icon sns_01" target="_blank">' +
							'<img src="../images/footer_icon_sns.png" alt="" width="25px" height="auto">' +
						'</a>' +
						'<a class="icon" href="#">' +
							'<img src="../images/footer_icon_blog.png" alt="" width="27px" height="auto">' +
						'</a>' +
						'<a href="reserve.html" class="icon">' +
							'<img src="../images/icon_reserve.png" alt="" width="32px" height="auto" style="opacity: 0.8;">' +
						'</a>' +
					'</div>' +
				'</div>' +
				'<div class="middle">' +
					'<div>' +
						'<img src="../images/footer_logo.png" alt="" width="220" height="auto">' +
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
function numbering(n) { // 이미지 넘버링 10 보다 작을때
	var num = ''; var n = n + 1; var n = n.toString();
	if (n.length < 2){for (var i = 0; i < 2 - n.length; i++){num += '0';}}
	return num + n;
}

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