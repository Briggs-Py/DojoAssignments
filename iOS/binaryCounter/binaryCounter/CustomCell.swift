//
//  CustomCell.swift
//  binaryCounter
//
//  Created by Briggs McKnight on 4/13/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

protocol BinaryTableViewCellDelegate: class {
    func buttonPressed(withValue value: Int)
}

class CustomCell: UITableViewCell {
    
    var number: Int?
    var delegate: BinaryTableViewCellDelegate?
    
    @IBOutlet weak var powerTenLabel: UILabel!
    
    @IBAction func addButtonPressed(_ sender: UIButton) {
        let val = self.number!
        delegate?.buttonPressed(withValue: val)
    }
    @IBAction func subtractButtonPressed(_ sender: UIButton) {
        let val = -self.number!
        delegate?.buttonPressed(withValue: val)
    }
}
