from django.shortcuts import render
import random
import string

def index(request):
    if not 'count' in request.session:
        request.session['count'] = 1
    return render(request, 'nameGen/index.html')

def generate(request):
    if request.method == "POST":
        request.session['word'] = ''.join(random.choice(string.ascii_uppercase + string.ascii_lowercase + string.digits) for x in range(14))
        request.session['count'] += 1
        return render(request, 'nameGen/index.html')
    else:
        return render(request, 'nameGen/index.html')
