$(document).ready(function() {
	$('.navigation__ul li div').html("");
	$('.navigation__ul .li1').click(function() {
			if ($('.navigation__ul li:nth-child(1)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(1)').removeClass('toggle');
					$('.navigation__ul li:nth-child(1) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(1) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
						
					});
				// }
			} else {
				$('.navigation__ul li:nth-child(1) div:nth-child(1)').html('1. 엄청난 양의 가사 노트');
				$('.navigation__ul li:nth-child(1) div:nth-child(2)').html('2. 레코딩 할 때 애용품');
				$('.navigation__ul li:nth-child(1) div:nth-child(3)').html('3. 저녁형 인간');
				$('.navigation__ul li:nth-child(1) div:nth-child(4)').html('4. 스튜디오에서 보인 본모습');
				$('.navigation__ul li:nth-child(1) div:nth-child(5)').html('5. 커튼이 쳐진 부스');
				$('.navigation__ul li:nth-child(1) div:nth-child(6)').html('6. 어른스럽고 예쁜 여성');
				$('.navigation__ul li:nth-child(1) div:nth-child(7)').html('7. 고생했던 초기의 레코딩');
				$('.navigation__ul li:nth-child(1) div:nth-child(8)').html('8. 거의 만나지 않았던 작곡가들');
				$('.navigation__ul li:nth-child(1) div').css("left","0");
				$('.navigation__ul li:nth-child(1)').addClass('toggle');
				$('.navigation__ul li:nth-child(1) div').removeClass('is-nonvisible');
				for (var i = 0; i < 8; i++) {
					$('.navigation__ul li:nth-child(1) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(1) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
						
					});
				}
			}
		});

			$('.navigation__ul .li2').click(function() {
			if ($('.navigation__ul li:nth-child(2)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(2)').removeClass('toggle');
					$('.navigation__ul li:nth-child(2) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(2) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
					});
			} else {
				$('.navigation__ul li:nth-child(2) div:nth-child(1)').html('1. 숲 속의 곰 아저씨 같이');
				$('.navigation__ul li:nth-child(2) div:nth-child(2)').html('2. 36회의 믹스 다운');
				$('.navigation__ul li:nth-child(2) div:nth-child(3)').html('3. 18종류의 어레인지');
				$('.navigation__ul li:nth-child(2) div:nth-child(4)').html('4. [영원]이 발매되기까지');
				$('.navigation__ul li:nth-child(2) div:nth-child(5)').html('5. 카펜터스를 노래하다');
				$('.navigation__ul li:nth-child(2) div:nth-child(6)').html('6. 엄선한 자켓 사진');
				$('.navigation__ul li:nth-child(2) div').css("left","0");
				$('.navigation__ul li:nth-child(2)').addClass('toggle');
				$('.navigation__ul li:nth-child(2) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(2) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(2) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
						
					});
			}
		});
		$('.navigation__ul .li3').click(function() {
			if ($('.navigation__ul li:nth-child(3)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(3)').removeClass('toggle');
					$('.navigation__ul li:nth-child(3) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(3) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
					});
			} else {
				$('.navigation__ul li:nth-child(3) div:nth-child(1)').html('1. 뮤직스테이션에 출연하다');
				$('.navigation__ul li:nth-child(3) div:nth-child(2)').html('2. 아이돌이 던진 한마디');
				$('.navigation__ul li:nth-child(3) div:nth-child(3)').html('3. 나가시마 시게오를 맞이하다');
				$('.navigation__ul li:nth-child(3) div:nth-child(4)').html('4. 프로모션의 대대적인 전개');
				$('.navigation__ul li:nth-child(3) div:nth-child(5)').html('5. 한밤 중에 보내 오는 코멘트');
				$('.navigation__ul li:nth-child(3) div:nth-child(6)').html('6. 좋은 작품을 만들기 위한 고집이 낳은 많은 해프닝');
				$('.navigation__ul li:nth-child(3) div').css("left","0");
				$('.navigation__ul li:nth-child(3)').addClass('toggle');
				$('.navigation__ul li:nth-child(3) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(3) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(3) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
					});
			}
		});		
		$('.navigation__ul .li4').click(function() {
			if ($('.navigation__ul li:nth-child(4)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(4)').removeClass('toggle');
					$('.navigation__ul li:nth-child(4) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(4) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
						
					});
			} else {
				$('.navigation__ul li:nth-child(4) div:nth-child(1)').html('1. 자연스러운 모습을 찍기 위해 사용한 여러가지 방법');
				$('.navigation__ul li:nth-child(4) div:nth-child(2)').html('2. 데뷔 초기, 3작품의 PV감독은 이와이 슌지');
				$('.navigation__ul li:nth-child(4) div:nth-child(3)').html('3. 원본 채로 폐기했던 최초의 사진');
				$('.navigation__ul li:nth-child(4) div:nth-child(4)').html('4. 해외촬영에서의 대담한 행동');
				$('.navigation__ul li:nth-child(4) div:nth-child(5)').html('5. 왕성한 호기심');
				$('.navigation__ul li:nth-child(4) div:nth-child(6)').html('6. 스타일리스트가 없는 촬영 현장');
				$('.navigation__ul li:nth-child(4) div:nth-child(7)').html('7. 본넷이 열려 있었던 [永遠]의 PV');
				$('.navigation__ul li:nth-child(4) div').css("left","0");
				$('.navigation__ul li:nth-child(4)').addClass('toggle');
				$('.navigation__ul li:nth-child(4) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(4) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(4) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
					});
			}
		});	
		$('.navigation__ul .li5').click(function() {
			if ($('.navigation__ul li:nth-child(5)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(5)').removeClass('toggle');
					$('.navigation__ul li:nth-child(5) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(5) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
					});
			} else {
				$('.navigation__ul li:nth-child(5) div:nth-child(1)').html('1. 엄청난 양의 가사 노트');
				$('.navigation__ul li:nth-child(5) div:nth-child(2)').html('2. 총 리허설을 하지 않았던 첫 라이브 투어');
				$('.navigation__ul li:nth-child(5) div:nth-child(3)').html('3. 단 2곡으로 게스트 출연');
				$('.navigation__ul li:nth-child(5) div:nth-child(4)').html('4. 등장 하지 않았던 오사카 라이브');
				$('.navigation__ul li:nth-child(5) div:nth-child(5)').html('5. 대기실에서 보인 본 모습');
				$('.navigation__ul li:nth-child(5) div:nth-child(6)').html('6. 피아노보다는...');
				$('.navigation__ul li:nth-child(5) div:nth-child(7)').html('7. 본넷이 열려 있었던 [永遠]의 PV');
				$('.navigation__ul li:nth-child(5) div').css("left","0");
				$('.navigation__ul li:nth-child(5)').addClass('toggle');
				$('.navigation__ul li:nth-child(5) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(5) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(5) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
						
					});
			}
		});	
		$('.navigation__ul .li6').click(function() {
			if ($('.navigation__ul li:nth-child(6)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(6)').removeClass('toggle');
					$('.navigation__ul li:nth-child(6) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(6) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
						
					});
				// }
			} else {
				$('.navigation__ul li:nth-child(6) div:nth-child(1)').html('1. 팬레터');
				$('.navigation__ul li:nth-child(6) div:nth-child(2)').html('2. 유선 모니터들 앞에서');
				$('.navigation__ul li:nth-child(6) div:nth-child(3)').html('3. ZARD Family');
				$('.navigation__ul li:nth-child(6) div:nth-child(4)').html('4. 사인을 요청받다!');
				$('.navigation__ul li:nth-child(6) div:nth-child(5)').html('5. 처음으로 보인 눈물');
				$('.navigation__ul li:nth-child(6) div').css("left","0");
				$('.navigation__ul li:nth-child(6)').addClass('toggle');
				$('.navigation__ul li:nth-child(6) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(6) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(6) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
						
					});
			}
		});	
		$('.navigation__ul .li7').click(function() {
			if ($('.navigation__ul li:nth-child(7)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(7)').removeClass('toggle');
					$('.navigation__ul li:nth-child(7) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(7) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
					});
			} else {
				$('.navigation__ul li:nth-child(7) div:nth-child(1)').html('1. 건강한 아기');
				$('.navigation__ul li:nth-child(7) div:nth-child(2)').html('2. 다리는 빠르지만 마이 페이스');
				$('.navigation__ul li:nth-child(7) div:nth-child(3)').html('3. 음을 알다');
				$('.navigation__ul li:nth-child(7) div:nth-child(4)').html('4. 가족과 함께');
				$('.navigation__ul li:nth-child(7) div:nth-child(5)').html('5. 커튼이 쳐진 부스');
				$('.navigation__ul li:nth-child(7) div:nth-child(6)').html('6. 어른스럽고 예쁜 여성');
				$('.navigation__ul li:nth-child(7) div:nth-child(7)').html('7. 고생했던 초기의 레코딩');
				$('.navigation__ul li:nth-child(7) div:nth-child(8)').html('8. 거의 만나지 않았던 작곡가들');
				$('.navigation__ul li:nth-child(7) div').css("left","0");
				$('.navigation__ul li:nth-child(7)').addClass('toggle');
				$('.navigation__ul li:nth-child(7) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(7) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(7) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
						
					});
			}
		});
		$('.navigation__ul .li8').click(function() {
			if ($('.navigation__ul li:nth-child(8)').hasClass('toggle')) {
				$('.navigation__ul li:nth-child(8)').removeClass('toggle');
					$('.navigation__ul li:nth-child(8) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(8) div').eq(i).toggleClass('is-visible').css("position","absolute").html("");
						},100 * i);
						
					});
				// }
			} else {
				$('.navigation__ul li:nth-child(8) div:nth-child(1)').html('1. 몸 상태의 변화');
				$('.navigation__ul li:nth-child(8) div:nth-child(2)').html('2. [ハ-トに火をつけて]의 촬영 다음날');
				$('.navigation__ul li:nth-child(8) div:nth-child(3)').html('3. 예정되어 있었던 촬영');
				$('.navigation__ul li:nth-child(8) div:nth-child(4)').html('4. 마지막 전화로 이야기했던 사람');
				$('.navigation__ul li:nth-child(8) div:nth-child(5)').html('5. 커튼이 쳐진 부스');
				$('.navigation__ul li:nth-child(8) div:nth-child(6)').html('6. Glorious Mind (글로리어스 마인드)');
				$('.navigation__ul li:nth-child(8) div:nth-child(7)').html('7. 고생했던 초기의 레코딩');
				$('.navigation__ul li:nth-child(8) div:nth-child(8)').html('8. 거의 만나지 않았던 작곡가들');
				$('.navigation__ul li:nth-child(8) div').css("left","0");
				$('.navigation__ul li:nth-child(8)').addClass('toggle');
				$('.navigation__ul li:nth-child(8) div').removeClass('is-nonvisible');
					$('.navigation__ul li:nth-child(8) div').each(function(i){
						setTimeout(function(){
							$('.navigation__ul li:nth-child(8) div').eq(i).addClass('is-visible').css("position", "relative").css("left","15%");
						},100 * i);
						
					});
			}
		});									
	});
