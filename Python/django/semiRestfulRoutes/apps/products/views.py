from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

def index(request):
    return render(request, "products/index.html")
