//: Playground - noun: a place where people can play

import UIKit

for i in 1...255{
    print(i)
}

for i in 1...100{
    if i%3 == 0 && i%5 == 0{
        print("Fizzbuzz")
    } else if i%3 == 0{
        print("Fizz")
    } else if i%5 == 0{
        print ("Buzz")
    }
}