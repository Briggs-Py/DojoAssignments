//: Playground - noun: a place where people can play

import UIKit

class Animal {
    var name: String
    var health = 100
    init(name: String){
        self.name = name
    }
    func displayHealth(){
        print(health)
    }
}

class Cat: Animal{
    init(catName: String){
        super.init(name: catName)
        self.health = 150
    }
    func growl(){
        print("Rawr!")
    }
    func run(){
        if self.health >= 10{
            health -= 10
        } else {
            print("Not Enough Health")
        }
        
    }
}

class Lion: Cat{
    init(lionName: String){
        super.init(catName: lionName)
        self.health = 200
    }
    override func growl(){
        print("ROAR!!!! I am the King of the Jungle")
    }
}

class Cheetah: Cat{
    func sleep(){
        if self.health < 150{
            self.health += 50
        } else {
            self.health = 200
        }
    }
    override func run(){
        if self.health >= 50{
            print("Running Fast")
            self.health -= 50
        } else {
            print("Not Enough Health")
        }
    }
}

var boris = Cheetah(catName: "Boris")

boris.run()
boris.run()
boris.run()
boris.run()
boris.displayHealth()

var cecil = Lion(lionName: "Cecil")

cecil.run()
cecil.run()
cecil.run()
cecil.displayHealth()
cecil.growl()
