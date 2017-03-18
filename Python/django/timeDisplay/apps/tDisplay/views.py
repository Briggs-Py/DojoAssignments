from django.shortcuts import render
from datetime import datetime
# Create your views here.
def index(request):
    myTime = {
    "time": datetime.now
    }
    return render(request, 'tDisplay/index.html', myTime)
