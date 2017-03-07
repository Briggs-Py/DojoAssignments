import random

def grade_generator():
    for x in range(0,10):
        g = random.randint(60,101)
        if g >= 60 and g <=69:
            print("Score: "+str(g)+"; Your grade is D")
        elif g >= 70 and g <=79:
            print("Score: "+str(g)+"; Your grade is C")
        elif g >= 80 and g <=89:
            print("Score: "+str(g)+"; Your grade is B")
        else:
            print("Score: "+str(g)+"; Your grade is A")
    print("End of the program. Bye!")
