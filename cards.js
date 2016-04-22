function Card (name, party, value, effect){
	this.name = name;
	this.value = value;
	this.party = party;
	this.effect = 
}

Card.prototype.play(target){
	target = target || null;
}



// This part of the code represents a players hand
// A hand consists of cards
// Cards that are playable must be in a hand.

Function Hand(cards){
	this.cards = cards;
}

Hand.prototype.discardAll(){
	this.cards = null;
}

Hand.prototype.draw(num){
num = num || 1;
this.cards.push //= deck.getCard()
}

