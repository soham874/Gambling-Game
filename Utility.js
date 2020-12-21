var amount = 100
var betAmount = 1

class Utility {

    //play a turn of the game
    playGame() {
        var game = Math.floor(Math.random() * 10 % 2)

        if (game == 0)
            amount -= betAmount
        else
            amount += betAmount
    }

    //simulates game for a day
    dayGame() {
        var dayAmount = amount

        while(amount > 0.5*dayAmount && amount < 1.5*dayAmount)
            this.playGame()

        console.log(amount)

    }

}

module.exports = new Utility();