from django.shortcuts import render, redirect
from django.contrib import messages
from datetime import datetime
import random

def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    if not 'message' in request.session:
        request.session['message'] = ""
    return render(request, "ninja_gold/index.html")

def process(request):
    date = datetime.date
    if request.POST['building'] == 'farm':
        num = random.randint(10, 20)
        request.session['gold'] += num
        request.session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the farm! " + " {:%Y/%m/%d %H:%M:%S}".format(datetime.now())+" </p>"
    elif request.POST['building'] == 'cave':
        num = random.randint(5, 10)
        request.session['gold'] += num
        request.session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the cave! " + " {:%Y/%m/%d %H:%M:%S}".format(datetime.now())+" </p>"
    elif request.POST['building'] == 'house':
        num = random.randint(2, 5)
        request.session['gold'] += num
        request.session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the house! " + " {:%Y/%m/%d %H:%M:%S}".format(datetime.now())+" </p>"
    else:
        num = random.randint(-50, 50)
        request.session['gold'] += num
        if num > 0:
            request.session['message'] += "<p style='color:green;'> Earned "+str(num)+ " gold from the casino! " + " {:%Y/%m/%d %H:%M:%S}".format(datetime.now())+" </p>"
        else:
            request.session['message'] += "<p style='color:red;'> Lost "+str(num)+ " gold from the casino... " + " {:%Y/%m/%d %H:%M:%S}".format(datetime.now())+" </p>"

    return redirect('/')
