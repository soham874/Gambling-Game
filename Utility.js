var amount = 100
var betAmount = 1

class Utility {

    //play a turn of the game
    playGame(){ 
        var game = Math.floor(Math.random()*10%2)

        if (game == 0)
            amount-=betAmount
        else
            amount+=betAmount          

    }

}

module.exports = new Utility();