//
//  ViewController.swift
//  coldCallv2
//
//  Created by Briggs McKnight on 4/3/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    let nameBank = ["Briggs", "Bob", "Max", "Jim", "Billy"]

    var number = 0
    var color = UIColor.black
    
    @IBAction func coldCallButton(_ sender: UIButton) {
        let number = Int(arc4random_uniform(5)+1)
        let show_number = String(number)
        numberLabel.text = show_number
        if number <= 2{
            color = UIColor.red
        } else if number <= 4{
            color = UIColor.orange
        } else {
            color = UIColor.green
        }
        let personNumber = Int(arc4random_uniform(UInt32(nameBank.count)))
        nameLabel.text = nameBank[personNumber]
        updateUI()
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        numberLabel.isHidden = true
        
    }
    
    func updateUI() {
        numberLabel.textColor = color
        numberLabel.isHidden = false
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

