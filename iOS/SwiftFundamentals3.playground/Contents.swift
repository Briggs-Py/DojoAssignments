//: Playground - noun: a place where people can play

import UIKit

var newarr = [Int]()
for i in 1...255{
    newarr.append(i)
}
// Flawed code, index will be out of range in some iterations.
//for i in 1...100{
   // var random = Int(arc4random_uniform(UInt32(newarr.count)))
   // var random2 = Int(arc4random_uniform(UInt32(newarr.count)))
   // newarr.insert(random, at: random2)
   // newarr.remove(at: random2-1)
   // newarr.insert(random2, at: random)
   // newarr.remove(at: random-1)
//}

// Proper way of swapping two values in an array:

for i in 1...100{
    var randomOne = Int(arc4random_uniform(UInt32(newarr.count)))
    var randomTwo = Int(arc4random_uniform(UInt32(newarr.count)))
    if randomOne != randomTwo {
        swap(&newarr[randomOne], &newarr[randomTwo])
    }
}

print(newarr)

for x in 1..<newarr.count{
    if newarr[x] == 42{
        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(x)")
    }
}
