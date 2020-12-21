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

    }

    //month game simulation
    monthGame(){
        for(let i = 1;i<=20;i++)
            this.dayGame()

        if(amount > 100)
            console.log("Amount won after a month is " + (amount - 100))
        else
            console.log("Amount lost after a month is " + (100 - amount ))       
    }
}

module.exports = new Utility();