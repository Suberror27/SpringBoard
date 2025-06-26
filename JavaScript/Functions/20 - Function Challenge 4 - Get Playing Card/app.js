// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object


function getCard() {
    function randomIndex(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    };
    
    const values = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
    const suits = ["clubs","spades", "hearts", "diamonds"];

    return {
        value: String(values[randomIndex(values.length)]),
        suit: String(suits[randomIndex(suits.length)]),
    };
};


console.log(getCard());