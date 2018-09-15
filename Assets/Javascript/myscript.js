				
		var crystalGame = {
		
			playerSum:         0,
			firedButton:       0,
			playerTotalWins:   0,
			computerTotalWins: 0
			
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
				
					crystalGame.computerTotalWins ++;
					document.getElementById('computerWins').innerHTML = 'The computer total wins are : ' + crystalGame.computerTotalWins;
					
					
				
				} else if(crystalGame.playerSum === targetScore) {
				
					crystalGame.playerTotalWins ++;
					document.getElementById('playerWins').innerHTML = 'The player total wins are : ' + crystalGame.playerTotalWins;

				
				} else {
				
				};
			
			});

