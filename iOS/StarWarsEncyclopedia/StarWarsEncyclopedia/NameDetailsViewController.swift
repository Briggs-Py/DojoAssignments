//
//  NameDetailsViewController.swift
//  StarWarsEncyclopedia
//
//  Created by Briggs McKnight on 4/18/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

class NameDetailsViewController: UITableViewController{
    
    var nameDetails = [String]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return nameDetails.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = nameDetails[indexPath.row]
        return cell
    }
    
}
