class car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.displayAll()
    def displayAll(self):
        print("Price: "+str(self.price)+"\n"+"Speed: "+str(self.speed)+"\n"+"Fuel: "+str(self.fuel)+"\n"+"Mileage: "+str(self.mileage)+"\n"+"Tax: "+str(self.tax))
        print("-------------------")


honda = car(12000, "125mph", "Full", "32mpg")
toyota = car(13000, "120mph", "Empty", "28mpg")
ford = car(15000, "140mph", "Full", "26mpg")
mazda = car(22000, "150mph", "Half-Full", "30mpg")
BMW = car(60000, "190mph", "Full", "25mpg")
nissan = car(45000, "175mph", "Empty", "35mpg")
