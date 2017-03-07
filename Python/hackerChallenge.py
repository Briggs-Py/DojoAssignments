def layered_multiples(list):
  biglist=[]

  for num in list:
    smalllist = []

    for index in range(0,num):

      smalllist.append(1)
    biglist.append(smalllist)

  print(biglist)

layered_multiples([2,4,1])
