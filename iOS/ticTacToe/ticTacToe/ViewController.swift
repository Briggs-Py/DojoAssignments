//
//  ViewController.swift
//  ticTacToe
//
//  Created by Briggs McKnight on 4/4/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var winnerLabel: UILabel!
    @IBOutlet weak var button1Label: UIButton!
    @IBOutlet weak var button2Label: UIButton!
    @IBOutlet weak var button3Label: UIButton!
    @IBOutlet weak var button4Label: UIButton!
    @IBOutlet weak var button5Label: UIButton!
    @IBOutlet weak var button6Label: UIButton!
    @IBOutlet weak var button7Label: UIButton!
    @IBOutlet weak var button8Label: UIButton!
    @IBOutlet weak var button9Label: UIButton!
    
    var pressedBlocks = [Int]()
    var colors = ["gray","gray","gray","gray","gray","gray","gray","gray","gray"]
    var turn = 1;
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        if notPressed(arr: pressedBlocks,spot: sender.tag){
            pressedBlocks.append(sender.tag)
            if turn == 1{
                sender.backgroundColor = UIColor.red
                colors[sender.tag - 1] = "red"
                turn = 2
                checkGame(position: sender.tag, color: "red")
            }else{
                sender.backgroundColor = UIColor.blue
                colors[sender.tag - 1] = "blue"
                turn = 1
                checkGame(position: sender.tag, color: "blue")
            }
        }
    }
    
    func checkGame(position: Int, color: String){
        
        //check from bottom to top
        if position - 6 >= 1 && position - 6 <= 3{
            if colors[position - 1 - 3] == color && colors[position - 1 - 6] == color{
                gameOver(color: color)
            }
        }
        //checks from top to bottom
        if position + 6 >= 7 && position + 6 <= 9{
            if colors[position - 1 + 3] == color && colors[position - 1 + 6] == color{
                gameOver(color: color)
            }
        }
        
        //checks from left to right
        if (position + 2) % 3 == 0{
            if colors[position - 1 + 2] == color && colors[position - 1 + 1] == color{
                gameOver(color: color)
            }
        }
        
        //checks from right to left
        if (position - 2) == 1 || (position - 2) == 4 || (position - 2) == 7 {
            if colors[position - 1 - 2] == color && colors[position - 1 - 1] == color{
                gameOver(color: color)
            }
        }
        
        //checks above and below
        if (position - 3) >= 1 && (position - 3) <= 3{
            if colors[position - 1 - 3] == color && colors[position - 1 + 3] == color{
                gameOver(color: color)
            }
        }
        
        //checks diagonal bottom to top-right
        if (position - 4) == 3{
            if colors[position - 1 - 2] == color && colors[position - 1 - 4] == color{
                gameOver(color: color)
            }
        }
        
        //checks diagonal top to bottom-left
        if (position + 4) == 7{
            if colors[position - 1 + 2] == color && colors[position - 1 + 4] == color{
                gameOver(color: color)
            }
        }
        
        //checks diagonal top to bottom-right
        if (position + 8) == 9{
            if colors[position - 1 + 4] == color && colors[position - 1 + 8] == color{
                gameOver(color: color)
            }
        }
        
        //checks diagonal bottom to top-left
        if (position - 8) == 1{
            if colors[position - 1 - 4] == color && colors[position - 1 - 8] == color{
                gameOver(color: color)
            }
        }
        
        //checks diagonal middle in all directions
        if (position - 2) == 3{
            if colors[position - 1 - 2] == color && colors[position - 1 + 2] == color{
                gameOver(color: color)
            }else if colors[position - 1 - 4] == color && colors[position - 1 - 2] == color{
                gameOver(color: color)
            }
        }
        
        
    }
    
    func gameOver(color:String){
        winnerLabel.text = ("congrats, \(color) wins!").capitalized
        winnerLabel.isHidden = false
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        winnerLabel.isHidden = true
        // Do any additional setup after loading the view, typically from a nib.
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
        // Dispose of any resources that can be recreated.
    }

    func notPressed(arr: [Int], spot: Int) -> Bool{
        for i in 0..<arr.count {
            if arr[i] == spot{
                return false
            }
        }
        return true;
    }
    
    @IBAction func resetButton(_ sender: UIButton) {
        winnerLabel.isHidden = true
        colors = ["gray","gray","gray","gray","gray","gray","gray","gray","gray"]
        pressedBlocks = [Int]()
        turn = 1
        button1Label.backgroundColor = UIColor.gray
        button2Label.backgroundColor = UIColor.gray
        button3Label.backgroundColor = UIColor.gray
        button4Label.backgroundColor = UIColor.gray
        button5Label.backgroundColor = UIColor.gray
        button6Label.backgroundColor = UIColor.gray
        button7Label.backgroundColor = UIColor.gray
        button8Label.backgroundColor = UIColor.gray
        button9Label.backgroundColor = UIColor.gray
    }
}
