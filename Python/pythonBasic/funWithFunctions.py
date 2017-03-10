#Odd/Even
def odd_even():
    for x in range(1,2001):
        if x%2 != 0:
            print ("Number is "+str(x)+". This is an odd number.")
        else:
            print ("Number is "+str(x)+". This is an even number.")

#Multiply
def multiply(list1, multiple):
    newList =[]
    for num in list1:
        num *= multiple
        newList.append(num)
    return(newList)

#Hacker Challenge
def layered_multiples(list):
  biglist=[]

  for num in list:
    smalllist = []

    for index in range(0,num):

      smalllist.append(1)
    biglist.append(smalllist)

  print(biglist)

layered_multiples([2,4,1])
