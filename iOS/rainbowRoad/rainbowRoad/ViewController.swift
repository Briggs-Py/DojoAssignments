//
//  ViewController.swift
//  rainbowRoad
//
//  Created by Briggs McKnight on 4/6/17.
//  Copyright © 2017 Briggs McKnight. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDataSource {

    let colorArray = [UIColor.red, UIColor.orange, UIColor.yellow, UIColor.green, UIColor.blue,UIColor.purple]
    
    @IBOutlet weak var tableView: UITableView!

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 6
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.backgroundColor = colorArray[indexPath.row]
        return cell
    }
}

