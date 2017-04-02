from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.urlresolvers import reverse
from .models import User

def index(request):
    return render(request, "loginApp/index.html")

def register(request):
    dataReg = User.objects.validateReg(request.POST.copy())
    if 'user' in dataReg:
        request.session['user'] = dataReg['user'].first_name
        messages.success(request, "Registration Successful! Welcome, "+ dataReg['user'].first_name)
        return redirect(reverse ("products:index"))
    else:
        for error in dataReg['errors']:
            messages.add_message(request, messages.WARNING, error)
        return redirect(reverse ('login:index'))

def login(request):
    dataLogin = User.objects.validateLog(request.POST.copy())
    if 'errors' in dataLogin:
    	for error in dataLogin['errors']:
    		messages.add_message(request, messages.ERROR, error)
        return redirect(reverse('login:index'))
    request.session['user'] = dataLogin['user'].first_name
    messages.success(request, "Login Successful! Welcome, "+ dataLogin['user'].first_name)
    return redirect(reverse ("products:index"))

def success(request):
    if not 'user' in request.session:
        return redirect('/')
    context = {
        "emails":User.objects.all()
    }
    return render(request, "loginApp/success.html", context)

def logout(request):
    request.session.clear()
    return redirect('/')
