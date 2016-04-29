$(document).ready(function(){


	var game = {
 
		dealer: {cardValue: [],
				 cardSuit:[],
		},
		player: {cardValue:[],
				 cardSuit:[],
				},
		suits: ['clubs','spades','hearts','diamonds'],
		dealCards: function(){
			this.dealer.cardValue.push(Math.floor((Math.random() * 13) + 1));
			this.dealer.cardSuit.push(Math.floor((Math.random() * 4));
			this.player.cardValue.push(Math.floor((Math.random() * 13) + 1));
			this.player.cardSuit.push(Math.floor((Math.random() * 4));

			
		},
		startGame: function() {
			for (var i = 0; i < 2; i++) {
				this.dealCards();
				console.log(this.dealer);
			}
			for (var i = 0 ; i < 2; i++) {

				$('#computer-cards').append('<li><img src="card.png" class="'+ this.dealer.cardValue[i] + '-of-' + this.suits[this.dealer.cardSuit[i]] + '"></li>');
				$('#player-cards').append('<li>'+ this.player.cardValue[i] + this.player.cardSuit[i]+'</li>');
			}


		},


}
		
	


game.startGame();

})
