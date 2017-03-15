class bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print(self.price+", "+self.max_speed+", "+str(self.miles)+"miles")
        return self
    def ride(self):
        print("Riding..")
        self.miles += 10
        return self
    def reverse(self):
        print("Reversing...")
        self.miles -= 1
        return self

ninja1 = bike("$4499.99", "225mph")
ninja1.ride().ride().ride().reverse().displayInfo()


hacker1 = bike("$3749.99", "185mph")
hacker1.ride().ride().reverse().reverse().displayInfo()


airblade = bike("$2499.99", "115mph")
airblade.reverse().reverse().reverse().displayInfo()
