from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Course

def index(request):
    context = {
        "courses": Course.objects.all()
    }
    return render(request, "coursesApp/index.html", context)

def new(request):
    return render(request, "coursesApp/new.html")

def process(request):
    if len(request.POST['name']) < 1:
        messages.add_message(request, messages.WARNING, "Name cannot be blank.")
        return redirect('/')

    if len(request.POST['description']) > 141:
        messages.add_message(request, messages.WARNING, "Comment cannot exceed 140 characters.")
        return redirect('/')

    Course.objects.create(name=request.POST['name'],description=request.POST['description'])

    return redirect('/')

def show(request, id):
    context = {
    "course": Course.objects.get(id=id)
    }
    return render(request, "coursesApp/show.html", context)

def edit(request, id):
    context = {
    "course": Course.objects.get(id=id)
    }
    return render(request, "coursesApp/edit.html", context)

def remove(request, id):
    context = {
    "course": Course.objects.get(id=id)
    }
    return render(request, "coursesApp/remove.html", context)

def goback(request):
    return redirect('/')

def delete(request, id):
    Course.objects.get(id=id).delete()
    return redirect('/')
