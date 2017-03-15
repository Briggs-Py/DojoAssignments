class animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100
    def walk(self):
        self.health -= 1
    def run(self):
        self.health -= 5
    def displayHealth(self):
        print(self.name+"\n"+str(self.health))

frank = animal("Frank")
frank.walk()
frank.walk()
frank.walk()
frank.run()
frank.run()
frank.displayHealth()


class dog(animal):
    def __init__(self, name):
        super(dog, self).__init__(name)
        self.health = 150
    def pet(self):
        self.health += 5

sloppy = dog("Sloppy")
sloppy.walk()
sloppy.walk()
sloppy.walk()
sloppy.run()
sloppy.run()
sloppy.pet()
sloppy.displayHealth()

class dragon(animal):
    def __init__(self, name):
        super(dragon, self).__init__(name)
        self.health = 350
    def fly(self):
        self.health -= 10
    def displayHealth(self):
        print("This is a Dragon!!")
        super(dragon, self).displayHealth()

pepper = dragon("Pepper")
pepper.walk()
pepper.walk()
pepper.walk()
pepper.run()
pepper.run()
pepper.fly()
pepper.fly()
pepper.displayHealth()
