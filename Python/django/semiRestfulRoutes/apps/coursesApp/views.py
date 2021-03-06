from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.urlresolvers import reverse
from .models import Course

def index(request):
    context = {
        "courses": Course.objects.all()
    }
    return render(request, "coursesApp/index.html", context)

def process(request):
    if len(request.POST['name']) < 1:
        messages.add_message(request, messages.WARNING, "Name cannot be blank.")
        return redirect(reverse('products:index'))

    if len(request.POST['description']) > 141:
        messages.add_message(request, messages.WARNING, "Comment cannot exceed 140 characters.")
        return redirect(reverse('products:index'))

    Course.objects.create(name=request.POST['name'],description=request.POST['description'], price=request.POST['price'])

    return redirect(reverse('products:index'))

def remove(request, id):
    context = {
    "course": Course.objects.get(id=id)
    }
    return render(request, "coursesApp/remove.html", context)

def goback(request):
    return redirect(reverse('products:index'))

def delete(request, id):
    Course.objects.get(id=id).delete()
    return redirect(reverse('products:index'))
