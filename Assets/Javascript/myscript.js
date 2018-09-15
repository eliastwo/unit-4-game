				
		var crystalGame = {
		
			playerSum:   0,
			firedButton: 0
			
		};

		let targetScore = Math.floor(Math.random() * 101) + 11;
		document.getElementById('targetScore').innerHTML = 'The target score for this game is : ' + targetScore;
		
		let scoreCrystal1 = Math.floor(Math.random() * 19)  + 11;
		let scoreCrystal2 = Math.floor(Math.random() * 19)  + 11;
		let scoreCrystal3 = Math.floor(Math.random() * 19)  + 11;
		let scoreCrystal4 = Math.floor(Math.random() * 19)  + 11;

		

		  	$("button").click(function() {
				crystalGame.firedButton = $(this).val();
				
				
				
				if(crystalGame.firedButton === 'Crystal1') {
				
					crystalGame.playerSum = crystalGame.playerSum + scoreCrystal1;
					document.getElementById('playerScore').innerHTML = 'The player score is : ' + crystalGame.playerSum;
				
				} else if(crystalGame.firedButton === 'Crystal2') {
				
					crystalGame.playerSum = crystalGame.playerSum + scoreCrystal2;
					document.getElementById('playerScore').innerHTML = 'The player score is : ' + crystalGame.playerSum;
					
				} else if(crystalGame.firedButton === 'Crystal3') {
				
					crystalGame.playerSum = crystalGame.playerSum + scoreCrystal3;
					document.getElementById('playerScore').innerHTML = 'The player score is : ' + crystalGame.playerSum;
				
				} else {
				
					crystalGame.playerSum = crystalGame.playerSum + scoreCrystal4;
					document.getElementById('playerScore').innerHTML = 'The player score is : ' + crystalGame.playerSum;
				
				};
				
				if(crystalGame.playerSum > targetScore) {
				
					alert('computer wins');
				
				} else if(crystalGame.playerSum === targetScore) {
				
					alert('player wins');
				
				} else {
				
				};
			
			});

		
		
		
/* 		
		
		var scoreCrystal1, scoreCrystal2, scoreCrystal3, scoreCrystal4, playerSum = 0;

		var targetScore   = Math.floor(Math.random() * 101) + 11;

		scoreCrystal1 = Math.floor(Math.random() * 19)  + 11;
		console.log(scoreCrystal1);
		scoreCrystal2 = Math.floor(Math.random() * 19)  + 11;
		console.log(scoreCrystal2);
		scoreCrystal3 = Math.floor(Math.random() * 19)  + 11;
		console.log(scoreCrystal3);
		scoreCrystal4 = Math.floor(Math.random() * 19)  + 11;
		console.log(scoreCrystal4);
		
		document.getElementById('targetScore').innerHTML = 'The target score for this game is : ' + targetScore;
		document.getElementById('playerScore').innerHTML = 'The player score is : ' + playerSum;

		function gamePlay() {
			
				function randomCrystal1() {

					playerSum = playerSum + scoreCrystal1;
					document.getElementById('playerScore').innerHTML = 'The player score is : ' + playerSum;
				};
		}; */

/* 			function randomCrystal2() {

				playerSum = playerSum + scoreCrystal2;
				document.getElementById('playerScore').innerHTML = 'The player score is : ' + playerSum;
			};

			function randomCrystal3() {
				
				playerSum = playerSum + scoreCrystal3;
				document.getElementById('playerScore').innerHTML = 'The player score is : ' + playerSum;
			};

			function randomCrystal4() {
				
				playerSum = playerSum + scoreCrystal4;
				document.getElementById('playerScore').innerHTML = 'The player score is : ' + playerSum;
			};
 */
