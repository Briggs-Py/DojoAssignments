//: Playground - noun: a place where people can play

import UIKit


func tossCoin() -> Int {
    print ("tossing a coin...")
    let random = Int(arc4random_uniform(UInt32(2)))
    if (random == 0){
        print ("Heads!")
        return (random)
    } else {
        print ("Tails!")
        return (random)
    }
}

tossCoin()

func tossMultipleCoins(tosses: Int) -> Double {
    var headCount = 0
    var tailCount = 0
    for _ in 0...tosses{
        if tossCoin() == 0{
            headCount += 1
        } else {
            tailCount += 1
        }
    }
    return Double(tosses) / Double(headCount)
}

tossMultipleCoins(tosses: 20)
