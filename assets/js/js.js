$(document).ready(function() {
	//set up body properties
	$("body").css({

		position: 'relative',
		width: '960px',
		height: 'auto',
		margin: '0 auto'
	});
	//adding all elements with JQ and CSS them 
	$("body").prepend('<div id="theCrystal" class = "crystalImage" />');
	$("body").prepend('<div id="theCrystal1"  class = "crystalImage" />');
	$("body").prepend('<div id="theCrystal2"  class = "crystalImage" />');
	$("body").prepend('<div id="theCrystal3"  class = "crystalImage"  />');
	$("body").prepend('<audio id="audio" src = "assets/audio/pick.mp3" audio/>');
	$("body").prepend('<audio id="audio1" src = "assets/audio/Lose.mp3" audio/>');
	$("body").prepend('<audio id="audio2" src = "assets/audio/win.mp3" audio/>');
	$("body").prepend('<div id="Looses" class = "trigger" />');
	$("body").prepend('<div id="wins" class = "trigger" />');



	$("#wins").css({
		position: 'absolute',
		left: '1036px',
		width: '100px',
		height: '100px',
		bottom: '-150px',
		margin: '0',
		clear: 'both',
		background: 'none',
		'z-index': '1',
		fontSize: '25px',
	});

	$("#Looses").css({
		position: 'absolute',
		left: '30px',
		width: '100px',
		height: '100px',
		bottom: '-184px',
		margin: '0',
		clear: 'both',
		background: 'none',
		'z-index': '1',
		fontSize: '25px',
	});



	$("#theCrystal").css({
		position: 'absolute',
		left: '967px',
		width: '300px',
		height: '181px',
		bottom: '-794px',
		margin: '0',
		clear: 'both',
		'z-index': '1',


	});

	$("#theCrystal1").css({
		position: 'absolute',
		left: '587px',
		width: '179px',
		height: '217px',
		bottom: '-634px',
		margin: '0',
		clear: 'both',
		'z-index': '1',
		// overflow: "auto";


	});

	$("#theCrystal2").css({
		position: 'absolute',
		left: '72px',
		width: '127px',
		height: '117px',
		bottom: '-550px',
		margin: '0',
		clear: 'both',
		'z-index': '1',
		// overflow: "auto";


	});
	$("#theCrystal3").css({
		position: 'absolute',
		left: '-298px',
		width: '257px',
		height: '257px',
		bottom: '-686px',
		margin: '0',
		clear: 'both',
		'z-index': '1',
		// overflow: "auto";


	});
	//hower on elements adds opacity etc...
	$(".crystalImage").hover(function() {
		$(this).addClass('coursor');
		$(this).addClass('swing');
		$(this).css({
			opacity: '0.4',
			backgroundColor: 'black'
		});
	}, function() {

		$(this).removeClass('coursor');
		$(this).css({
			opacity: '0.25'

		});
	});


	//game in object
	var GemGame = {
		//set globals
		computerPick: 0,
		counter: 0,
		looses: 0,
		wins: 0,
		//new game function
		newGame: function() {

			//number for crustals
			computerPick = parseInt(Math.floor(Math.random() * 75) + 20);

			console.log("Computer's pick " + computerPick);
			counter = 0; // User's counter
			//HTMLing content losses winns and comp number! 

			$('#Looses').html('Looses ' + GemGame.looses);
			$('#wins').html('Wins ' + GemGame.wins);
			$('.scoreToDo').html('Crystals left ' + computerPick);


			console.log("User Current Counter " + counter);

			//set up array of random numbers that we will use as a value for gems
			NumbersForCrystals = [];
				//set arrays's value
			for (var NumbersForCrystals = [], i = 0; i < 4; i++) {
				var number = parseInt(Math.floor(Math.random() * 10) + 1).toString();
				NumbersForCrystals.push(number);


				console.log(NumbersForCrystals);
						//all classes recieving a new attribute data-crystalvalue 
						//that we will use in game as a gemValue!
						//we use i of array for each class for gem
						//since both array lengths are same, numbers going to be set to each Gem!
				$('.crystalImage').each(function(i, obj) {

					$(this).attr("data-crystalvalue", NumbersForCrystals[i]);
					console.log(parseInt($(this).data("crystalvalue")));//You can see how array fils up



				});


			}



		},


		Scores: function() {
					//function on click on Gem!
			$(".crystalImage").on('click', function(event) {
				$("#audio").get(0).play();  
				//set up a counter for User that uses the Data Value FROM THIS PUSHED gem! 
				counter = parseInt(counter) + parseInt($(this).data("crystalvalue"));

				console.log(parseInt($(this).data("crystalvalue")) + "  Crystal value!");

				console.log("This is number to fill the computer " + counter)

				// console.log('I was clicked! ');

				$('.scoreToDo').html('Crystals left ' + (computerPick - counter)); // changes HTML for Crystals Left! 
				if (parseInt(counter) === computerPick) {
					parseInt(GemGame.wins++);
					$("#audio2").get(0).play();
					$(this).removeData('crystalvalue'); // if game won or lost it removes all old crystal values to set new in New game! 
					$(".crystalImage").off('click'); // This will let sond play fully and not able to push button
					setTimeout(GemGame.newGame, 3000) // timeouts for functions
					setTimeout(GemGame.Scores, 3000)


				} else if (parseInt(counter) > computerPick) { // if US > Computer we loose
					$("#audio1").get(0).play();
					parseInt(GemGame.looses++); //increases loosess



					// console.log(GemGame.looses + " Looses count!")
					$(this).removeData('crystalvalue');// if game won or lost it removes all old crystal values to set new in New game! 
					$(".crystalImage").off('click');// This will let sond play fully and not able to push button
					setTimeout(GemGame.newGame, 3000)// timeouts for functions
					setTimeout(GemGame.Scores, 3000)

				
				}



			});


		}



	};
	GemGame.newGame();
	GemGame.Scores();


// THIS IS A SAME GAME WRITTEN IN FUNCTION! WORKS AS WELL! 
	// var computerPick = Math.floor(Math.random() * 100) + 1;
	// console.log("This is computers number " + computerPick);

	// var counter = 0;

	// NumbersForCrystals = [];

	// for (var NumbersForCrystals = [], i = 0; i < 4; i++) {
	// 	var number = Math.floor(Math.random() * 20) + 1;
	// 	NumbersForCrystals.push(number);


	// 	console.log(NumbersForCrystals);

	// 	$('.crystalImage').each(function(i, obj) {

	// 		return $(this).attr("data-crystalvalue", NumbersForCrystals[i]).toString();

	// 	});


	// }



	// console.log($("#theCrystal").data("crystalvalue"))
	// console.log($("#theCrystal1").data("crystalvalue"))
	// console.log($("#theCrystal2").data("crystalvalue"))
	// console.log($("#theCrystal3").data("crystalvalue"))

	// $("#theCrystal").hover(function() {
	// 	$("#theCrystal").addClass('coursor');
	// 	$("#theCrystal").css({
	// 		opacity: '0.6'
	// 	});
	// }, function() {

	// 	$("#theCrystal").removeClass('coursor');
	// 	$("#theCrystal").css({
	// 		opacity: '1'
	// 	});
	// });
	// $(".crystalImage").on('click', function(event) {

	// 			counter += $(this).data("crystalvalue");
	// 			console.log("This is number to mach the computer " + counter)

	// 	console.log('I was clicked! ');


	// 	if (counter === computerPick) {

	// 	console.log("You are winner! ")
	// } else if (counter > computerPick) {
	// 	console.log("You are looser! ")

	// }

	// });



});