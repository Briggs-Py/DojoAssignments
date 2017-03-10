#Multiples
for x in range(0,1001):
    print (x)

for x in range(5, 1000001):
    if x%5 == 0:
        print (x)
#Sum
a = [1,2,5,10,255,3]
y = 0
for x in a:
    y += x
print(y)

#Average
a = [1,2,5,10,255,3]
total = 0
for x in a:
    total += x 
avg = total/len(a)
print (avg)
