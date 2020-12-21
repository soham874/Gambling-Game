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

        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NEW MONTH SIMULATION~~~~~~~~~~~~~~~~~~~")
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
            
        var flag = 0
        if(amount > 100){
            console.log("Amount won after a month is " + (amount - 100))
            flag = 1
        }
        else
            console.log("Amount lost after a month is " + (100 - amount ))   
            
        console.log("Days on which game was won : "+wonDay)
        console.log("Amount won on corresponding days : "+wonAmount)
        console.log("Days on which game was lost : "+lostDay)
        console.log("Amount lost on corresponding days : "+lostAmount)

        this.maxAmountAndDay(wonDay,wonAmount)
        this.maxAmountAndDay(lostDay,lostAmount)

        if(flag == 1){
            wonDay = []
            wonAmount = []
            lostDay = []
            lostAmount = []
            console.log("I am playing again!!")
            this.monthGame()
        } else {
            console.log("I am stopping play!!")
            return 0
        }

    }

    //find maximum amount and corresponding day
    maxAmountAndDay(days,amounts){

        var pos = 0

        for(let i = 0;i<amounts.length;i++)
            if(amounts[i] > amounts[pos])
                pos = i

        console.log("Amount = "+amounts[pos]+", Day = "+days[pos])

    }
}

module.exports = new Utility();