var bastila = {
		name: "Bastila",
		hp: 100,
		pw: 7,
		cp: 15
	}

	var malak = {
		name: "Malak",
		hp: 150,
		pw: 5,
		cp: 10
	}

	var revan = {
		name: "Revan",
		hp: 225,
		pw: 3,
		cp: 18
	}

	var traya = {
		name: "Traya",
		hp: 75,
		pw: 10,
		cp: 30
	}


$(document).ready(function() {

	

	// var bastilahp = 100;

	// var malakhp = 150;

	// var revanhp = 225;

	// var trayahp = 75;

	// var bastilaPW = 7;

	// var malakPW = 5;

	// var revanPW = 3;

	// var trayaPW = 10;

	// var bastilaCP = 15;

	// var malakCP = 10;

	// //var revanCP = 18;

	// //var trayaCP = 30;

	var characterid;

	var opponentid;

	var attackcounter = 1;

	// $(".bastila").data(bastilahp, bastilaPW, bastilaCP);

	// $(".malak").data(malakhp, malakPW, malakCP);

	// $(".revan").data(revanhp, revanPW, revanCP);

	// $(".traya").data(trayahp, trayaPW, trayaCP);
	

	$(".BHP").html("Bastila HP: " + bastila.hp);

	$(".MHP").html("Malak HP: " + malak.hp);

	$(".RHP").html("Revan HP: " + revan.hp);

	$(".THP").html("Traya HP: " + traya.hp);

	$("#bastila, #malak, #revan, #traya").one("click", function(){
		$(this).appendTo(".yourcharacter").addClass("user");
			characterid = $(this).attr("id");
			
		
		$(".character_row").children().addClass("defender").appendTo(".enemies");


		$("#bastila, #malak, #revan, #traya").off("click");

		$(".defender").one("click", function(){
			
			$(this).appendTo(".opponent");
			opponentid = $(this).attr("id");


		$("#bastila, #malak, #revan, #traya").off("click");
		});


	});


	$(".btn").on("click", function(){

		window[characterid].hp = window[characterid].hp - window[opponentid].cp;
		window[opponentid].hp = window[opponentid].hp - window[characterid].pw * attackcounter;
		attackcounter++;

		console.log(window[characterid].hp);
		console.log(window[opponentid].hp);
		
	});




	

	

		
		
	














});