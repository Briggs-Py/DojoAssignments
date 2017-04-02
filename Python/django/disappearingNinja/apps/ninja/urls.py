from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.all, name='all'),
    url(r'^ninja$', views.all, name='all'),
    url(r'^ninja/(?P<color>\w+)$', views.ninjas)
]
