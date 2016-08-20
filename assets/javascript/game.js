$(document).ready(function() {

	var bastilahp = 100;

	var malakhp = 150;

	var revanhp = 225;

	var trayahp = 75;

	var bastilaPW = 7;

	var malakPW = 5;

	var revanPW = 3;

	var trayaPW = 10;

	var bastilaCP = 15;

	var malakCP = 10;

	var revanCP = 18;

	var trayaCP = 30;

	var playable = []

	$(".bastila").data(bastilahp, bastilaPW, bastilaCP);

	$(".malak").data(malakhp, malakPW, malakCP);

	$(".revan").data(revanhp, revanPW, revanCP);

	$(".traya").data(trayahp, trayaPW, trayaCP);

	$(".BHP").html("Bastila HP: " + bastilahp);

	$(".MHP").html("Malak HP: " + malakhp);

	$(".RHP").html("Revan HP: " + revanhp);

	$(".THP").html("Traya HP: " + trayahp);

	$(".bastila, .malak, .revan, .traya").one("click", function(){
		$(this).appendTo(".yourcharacter").addClass("user");

		
		$(".character_row").children().addClass("defender").appendTo(".enemies");


		$(".bastila, .malak, .revan, .traya").off("click");

		$(".defender").one("click", function(){
			
			$(this).appendTo(".opponent");
		});


	});


	$(".btn").on("click", function(){

		bastilaPW += 7;
		malakPW += 5;
		revanPW += 3;
		trayaPW += 10;

		if (user) {}

		console.log(bastilaPW);
		
	});




	

	

		
		
	














});