//
//  ViewController.swift
//  binaryCounter
//
//  Created by Briggs McKnight on 4/12/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

class CustomCellsViewController: UITableViewController {
    
    var total = 0
    
    
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        let decimal = pow(10, indexPath.row)
        cell.number = Int(NSDecimalNumber(decimal: decimal))
        cell.delegate = self as? BinaryTableViewCellDelegate
        cell.powerTenLabel.text = "\(cell.number!)"
        return cell
    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

