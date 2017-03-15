class bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def displayInfo(self):
        print(self.price+", "+self.max_speed+", "+str(self.miles)+"miles")
    def ride(self):
        print("Riding..")
        self.miles += 10
    def reverse(self):
        print("Reversing...")
        self.miles -= 1

ninja1 = bike("$4499.99", "225mph")
ninja1.ride()
ninja1.ride()
ninja1.ride()
ninja1.reverse()
ninja1.displayInfo()

hacker1 = bike("$3749.99", "185mph")
hacker1.ride()
hacker1.ride()
hacker1.reverse()
hacker1.reverse()
hacker1.displayInfo()

airblade = bike("$2499.99", "115mph")
airblade.reverse()
airblade.reverse()
airblade.reverse()
airblade.displayInfo()
