//
//  ViewController.swift
//  ninjaGold
//
//  Created by Briggs McKnight on 4/3/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var scoreLabel: UILabel!
    @IBOutlet weak var farmLabel: UILabel!
    @IBOutlet weak var caveLabel: UILabel!
    @IBOutlet weak var houseLabel: UILabel!
    @IBOutlet weak var casinoLabel: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        farmLabel.isHidden = true
        caveLabel.isHidden = true
        houseLabel.isHidden = true
        casinoLabel.isHidden = true
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    var total = 0
    @IBAction func buildingButtonPressed(_ sender: UIButton) {
        if sender.tag == 1{
            let score = Int(arc4random_uniform(11)+10)
            let new_score = score
            total += new_score
            scoreLabel.text = String(total)
            farmLabel.text = "You earned \(String(new_score)) Gold"
            farmLabel.isHidden = false
            caveLabel.isHidden = true
            houseLabel.isHidden = true
            casinoLabel.isHidden = true
            
        } else if sender.tag == 2{
            let score = Int(arc4random_uniform(6)+5)
            let new_score = score
            total += new_score
            scoreLabel.text = String(total)
            caveLabel.text = "You earned \(String(new_score)) Gold"
            farmLabel.isHidden = true
            caveLabel.isHidden = false
            houseLabel.isHidden = true
            casinoLabel.isHidden = true
            
        } else if sender.tag == 3{
            let score = Int(arc4random_uniform(4)+2)
            let new_score = score
            total += new_score
            scoreLabel.text = String(total)
            houseLabel.text = "You earned \(String(new_score)) Gold"
            farmLabel.isHidden = true
            caveLabel.isHidden = true
            houseLabel.isHidden = false
            casinoLabel.isHidden = true
            
        }else if sender.tag == 4{
            let score = Int(arc4random_uniform(101))
            let new_score = score - 50
            total += new_score
            scoreLabel.text = String(total)
            if new_score > 0{
               casinoLabel.text = "You earned \(String(new_score)) Gold"
            } else {
               casinoLabel.text = "You lost \(String(new_score)) Gold..."
            }
            farmLabel.isHidden = true
            caveLabel.isHidden = true
            houseLabel.isHidden = true
            casinoLabel.isHidden = false
            
        }
        
        print(sender.tag)
    }
   
        @IBAction func resetButtonPressed(_ sender: UIButton) {
        farmLabel.isHidden = true
        caveLabel.isHidden = true
        houseLabel.isHidden = true
        casinoLabel.isHidden = true
        total = 0
        scoreLabel.text = "0"
    }
}

