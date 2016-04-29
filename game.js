$(document).ready(function(){

function resetGame() {
	return {
	var game = {
		dealer: {cardValue: [],
				 cardSuit:[],
		},
		player: {cardValue:[],
				 cardSuit:[],
				},

		dealCards: function(){
			this.dealer.cardValue.push(Math.floor((Math.random() * 13) + 1));
			this.dealer.cardSuit.push(Math.floor((Math.random() * 4) + 1));
			this.player.cardValue.push(Math.floor((Math.random() * 13) + 1));
			this.player.cardSuit.push(Math.floor((Math.random() * 4) + 1));
			
		},
		startGame: function() {
			for (var i = 0; i < 2; i++) {
				dealCards();
			}

		},
	}

		]
	}
} 


})
