from django.conf.urls import url
from . import views
def index(request):
    print ('hello')

urlpatterns = [
    url(r'^$', views.index)
]
