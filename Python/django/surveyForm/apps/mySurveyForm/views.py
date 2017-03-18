from django.shortcuts import render, redirect
from django.contrib import messages

def index(request):
    return render(request, 'mySurvey/index.html')

def process(request):

    if len(request.POST['name']) < 1:
        messages.add_message(request, messages.WARNING, "Name cannot be blank.")
        return redirect('/')

    if len(request.POST['comment']) > 141:
        messages.add_message(request, messages.WARNING, "Comment cannot exceed 140 characters.")
        return redirect('/')

    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']



    messages.add_message(request, messages.SUCCESS, "Success!")

    return redirect('/results')

def results(request):

    return render(request, 'mySurvey/results.html')

def goBack(request):
    return  redirect('/')
