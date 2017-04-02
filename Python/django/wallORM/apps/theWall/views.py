from django.shortcuts import render

def index(request):
    return render (request, 'sports_app/index.html')
