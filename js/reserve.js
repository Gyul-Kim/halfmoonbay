function reserInfo(e){
	
	// 01.객실정보 및 요금 
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/' + rv_ttl + '/5',//실시간예약 객실가격 URL 
	function(data){
		var  i = 0;	
		$("table#ROOM_CODE").append("<caption class='alt'>객실정보 및 요금 안내</caption>");
		$("table#ROOM_CODE").append("<tbody></tbody>");
		
		$.each(data.result,function(key,val){
			
			//비수기
			var P01_WEEK_PRCE = val["P01_WEEK_PRCE"].slice(0,-4);
			var P01_FRD_PRCE = val["P01_FRD_PRCE"].slice(0,-4);
			var P01_SAT_PRCE = val["P01_SAT_PRCE"].slice(0,-4);

			//준성수기
			var P04_WEEK_PRCE = val["P04_WEEK_PRCE"].slice(0,-4);
			var P04_FRD_PRCE = val["P04_FRD_PRCE"].slice(0,-4);
			var P04_SAT_PRCE = val["P04_SAT_PRCE"].slice(0,-4);
			
			//성수기
			var P05_WEEK_PRCE = val["P05_WEEK_PRCE"].slice(0,-4);
			var P05_FRD_PRCE = val["P05_FRD_PRCE"].slice(0,-4);
			var P05_SAT_PRCE = val["P05_SAT_PRCE"].slice(0,-4);
		
			$("table#ROOM_CODE tbody").append(
				"<tr class='room_" + i + "'>" +
					"<td style='background:#fbfbfb;'><a href='room_0" + (i + 1)  +".html'>" + val["ETC_DETL"] + "</a></td>" + 
					"<td> "+ val["ADLT_BASE_PERS"] + "명</td><td>" + val["ADLT_MAX_PERS"] + "명</td>" + 
					"<td>" + P01_WEEK_PRCE + "만원</td><td>" + P01_FRD_PRCE + "만원</td>" + 
					"<td>" + P01_SAT_PRCE + "만원</td>" + 
					
					"<td>" + P04_WEEK_PRCE + "만원</td><td>" + P04_FRD_PRCE + "만원</td>" + 
					"<td>" + P04_SAT_PRCE + "만원</td><td>" + P05_SAT_PRCE + "만원</td>" +
				"</tr>" 
			);
			i++;
		});
		
		$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/' + rv_ttl + '/8',//실시간예약 객실정보 URL
		function(data){
		//타입 배열에 담기
		var arr1 = new Array();
		$.each(data.result,function(key,val){
			var sorts = val["SORT_NO"] - 1;
			arr1.push(data.result[sorts]["TYPE_NAME"]);
		});
		// 중복값체크 
		var arr2 = arr1.reduce(function(a,b){
			if(a.indexOf(b) < 0) a.push(b);
			return a;
		},[]);
		// 일치하는 인덱스값 반환
		var arr3 = new Array();
		for(var n = 0; n < arr1.length; n++){
			for(var c = 0; c < arr2.length; c++){
				if(arr1[n] == arr2[c]){arr3.push(arr1.indexOf(arr2[c]));}
			}
		}
		// 증복값 체크
		var arr4 = arr3.reduce(function(a,b){
			if(a.indexOf(b) < 0) a.push(b);
			return a;
		},[]);
		// 출력
		var arr5 = new Array();
		for(var a = 0; a < arr4.length; a++){
			var h = arr4[a];
			arr5.push(h);
		}
		for(var i = 0; i < arr5.length; i++){
			var ft = arr3.indexOf(arr5[i]);
			var lt = arr3.lastIndexOf(arr5[i]) + 1;
			var rsp = -(ft - lt);
			// $("table#ROOM_CODE tbody tr").eq(arr5[i]).prepend("<th rowspan='3'>"+ data.result[arr5[i]]["TYPE_NAME"] +"</th>");		
		}
		});
		$("table#ROOM_CODE tbody tr").eq(0).prepend("<th rowspan='3'>A타입</th>");	
		$("table#ROOM_CODE tbody tr").eq(3).prepend("<th rowspan='3'>B타입</th>");	

		$("table#ROOM_CODE tbody tr").eq(0).find("td a").text("301");
		$("table#ROOM_CODE tbody tr").eq(1).find("td a").text("401");
		$("table#ROOM_CODE tbody tr").eq(2).find("td a").text("501");
		$("table#ROOM_CODE tbody tr").eq(3).find("td a").text("302");
		$("table#ROOM_CODE tbody tr").eq(4).find("td a").text("402");
		$("table#ROOM_CODE tbody tr").eq(5).find("td a").text("502");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(4)").text("50만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(4)").text("45만원");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(5)").text("55만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(5)").text("50만원");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(6)").text("60만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(6)").text("55만원");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(7)").text("60만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(7)").text("55만원");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(8)").text("65만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(8)").text("60만원");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(9)").text("70만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(9)").text("65만원");

		$("table#ROOM_CODE tbody tr").eq(1).find("td:nth-child(10)").text("80만원");
		$("table#ROOM_CODE tbody tr").eq(4).find("td:nth-child(10)").text("75만원");



		$("table#ROOM_CODE tbody tr").eq(0).find("td a").attr("href","room_01.html"); 
		$("table#ROOM_CODE tbody tr").eq(1).find("td a").attr("href","room_03.html"); 
		$("table#ROOM_CODE tbody tr").eq(2).find("td a").attr("href","room_05.html");
		$("table#ROOM_CODE tbody tr").eq(3).find("td a").attr("href","room_02.html");
		$("table#ROOM_CODE tbody tr").eq(4).find("td a").attr("href","room_04.html");
		$("table#ROOM_CODE tbody tr").eq(5).find("td a").attr("href","room_06.html");
	});
	
	// 02.객실 이용시 확인사항
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/' + rv_ttl + '/3',//실시간예약 입실안내 URL
	function(data){
		$.each(data.result,function(key,val){
			if(val["PONT_YN"] == "Y") $("ul.ENTR_COMM").append("<li style='color:red;'>" + val["ENTR_COMM"] + "</li>");	
			else $("ul.ENTR_COMM").append("<li>" + val["ENTR_COMM"] + "</li>");
		});
	});

	// 03.입금전 확인사항
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/' + rv_ttl + '/2',//실시간예약 취소수수료 URL
	function(data){
		$.each(data.result,function(key,val){
			if(val["PONT_YN"] == "Y") $("ul.CNCL_COMM").append("<li style='color:red;'>" + val["CNCL_COMM"] + "</li>");	
			else $("ul.CNCL_COMM").append("<li>" + val["CNCL_COMM"] + "</li>");	
		});				
	});

	//환불규정
	$.getJSON('https://digitalnow.co.kr/reserve/pensionInfo/' + rv_ttl + '/1',//실시간예약 환불규정 URL 
	function(data){
		$("table#REFU_PRCE").append("<caption class='alt'>환불규정</caption>");
		$("table#REFU_PRCE").append("<thead><tr></tr></thead><tbody><tr></tr></tbody>");
		$.each(data.result,function(key,val){
			$("table#REFU_PRCE thead tr").append("<th>" + val["STD_DAY"] + "일전</th>");
			$("table#REFU_PRCE tbody tr").append("<td>" + val["CNCL_COMS"] + "%</td>");
			if(val["STD_DAY"] > 30) $("table#REFU_PRCE thead tr th:last").text("예약 취소시 기본수수료");
		});
		$("table#REFU_PRCE thead tr").prepend("<th>입실일<br />기준</th>");
		$("table#REFU_PRCE tbody tr").prepend("<td style='color:#676767;font-weight:13px;font-weight:bold;'>취소<br />위약금</td>");
		$("table#REFU_PRCE thead tr th").eq(1).remove(); $("table#REFU_PRCE tbody tr td").eq(1).remove();
	});
}

