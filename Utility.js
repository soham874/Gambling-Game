var readlineSync = require('readline-sync');

var currentAmount = 100
var daysInAMonth = 20

const BET_AMOUNT = 1
const WON_BET = 1
const LOST_BET = 0

var wonDay = []
var wonAmount = []

var lostDay = []
var lostAmount = []

class Utility {

    //play a turn of the game
    playGame = () => {
        var game = Math.floor(Math.random() * 10 % 2)

        switch (game) {
            case WON_BET:
                currentAmount += BET_AMOUNT
                break
            case LOST_BET:
                currentAmount -= BET_AMOUNT
        }
    }

    //simulates game for a day
    dayGame = () => {
        var dayAmountStarting = currentAmount

        while (currentAmount > 0.5 * dayAmountStarting && currentAmount < 1.5 * dayAmountStarting)
            this.playGame()

        return dayAmountStarting
    }

    //month game simulation
    monthGame = () => {

        let monthStartAmount = currentAmount
        for (let i = 1; i <= daysInAMonth; i++) {
            var finalDayAmount = this.dayGame()

            if (currentAmount > finalDayAmount) {
                wonDay.push(i)
                wonAmount.push(currentAmount - finalDayAmount)
            } else {
                lostDay.push(i)
                lostAmount.push(finalDayAmount - currentAmount)
            }
        }

        var flag = 0
        if (currentAmount > monthStartAmount) {
            console.log(`\nAmount won after a month is $ ${currentAmount - monthStartAmount}`)
            flag = 1
        }
        else
            console.log(`Amount lost after a month is $ ${monthStartAmount - currentAmount}`)

        this.printGamlingResults()

        console.log("\nLuckiest day ==>")
        this.maxAmountAndDay(wonDay, wonAmount)
        console.log("Unluckiest day ==>")
        this.maxAmountAndDay(lostDay, lostAmount)
  
        if (flag == 1) {
            wonDay = []
            wonAmount = []
            lostDay = []
            lostAmount = []
            
            let choice = readlineSync.question(`\nDo you want to play again ? <1> Yes <2> No : `);
            if (choice != 1)
                return 0

            console.log("I am playing again!!")
            this.monthGame()
        } else {
            console.log("I am stopping play!!")
            return 0
        }

    }

    //find maximum amount and corresponding day
    maxAmountAndDay = (days, amounts) => {

        var pos = 0

        for (let i = 0; i < amounts.length; i++)
            if (amounts[i] > amounts[pos])
                pos = i

        console.log(`Amount = $  ${amounts[pos]} , Day = ${days[pos]} \n`)

    }

    //gambling results
    printGamlingResults = () => {
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~Gambling simulation results~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        var dayResult
        for (let i = 1; i <= daysInAMonth; i++) {

            if ((wonDay.findIndex(day => day == i)) != -1)
                console.log(`On day ${i}, player won $ ${wonAmount[wonDay.findIndex(day => day == i)]}`)

            else
                console.log(`On day ${i}, player lost $ ${lostAmount[lostDay.findIndex(day => day == i)]}`)
        }
    }
}

module.exports = new Utility();