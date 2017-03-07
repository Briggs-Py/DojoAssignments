#Find and Replace
my_str = "If monkeys like bananas, then I must be a monkey!"
print (my_str.replace("monkey", "alligator"))

#Min and Max
x = [2,54,-2,7,12,98]
print (max(x))
print (min(x))

#First and Last
x = ["hello", 2,54,-2,7,12,98,"world"]
print(x[0:1])
print(x[len(x)-1:])

#New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
y = x[0:int(len(x)/2)]
z = x[int(len(x)/2):]
z.insert(0, y)
print (z)
