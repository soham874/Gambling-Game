var amount = 100
var betAmount = 1

var wonDay = []
var wonAmount = []

var lostDay = []
var lostAmount = []

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

        return dayAmount
    }

    //month game simulation
    monthGame(){
        for(let i = 1;i<=20;i++){
            var finalAmount = this.dayGame()

            if(amount > finalAmount){
                wonDay.push(i)
                wonAmount.push(amount-finalAmount)
            }else{
                lostDay.push(i)
                lostAmount.push(finalAmount-amount)
            }
        }
            

        if(amount > 100)
            console.log("Amount won after a month is " + (amount - 100))
        else
            console.log("Amount lost after a month is " + (100 - amount ))   
            
        console.log("Days on which game was won : "+wonDay)
        console.log("Amount won on corresponding days : "+wonAmount)
        console.log("Days on which game was lost : "+lostDay)
        console.log("Amount lost on corresponding days : "+lostAmount)
    }
}

module.exports = new Utility();