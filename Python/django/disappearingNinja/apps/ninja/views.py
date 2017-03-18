from django.shortcuts import render

def index(request):
    return render(request, "ninja/index.html")
