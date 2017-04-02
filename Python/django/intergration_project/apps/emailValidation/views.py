from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Email


def index(request):
    return render(request, "emailValidation/index.html")

def process(request):
    if Email.objects.validate(request.POST['email']):
        Email.objects.create(email=request.POST['email'])
        messages.success(request, 'You have successfully submitted your Email!')
        return redirect('/success')
    else:
        messages.warning(request, 'Invalid Email')
        return redirect('/')

def submit(request):
    context = {
        "emails":Email.objects.all()
    }
    return render(request, "emailValidation/success.html", context)
