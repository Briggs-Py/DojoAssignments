from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new),
    url(r'^process$', views.process),
    url(r'^show/(?P<id>\d{1,4})$', views.show),
    url(r'^edit/(?P<id>\d{1,4})$', views.edit),
    url(r'^remove/(?P<id>\d{1,4})$', views.remove),
    url(r'^goback$', views.goback),
    url(r'^delete/(?P<id>\d{1,4})$', views.delete)

]
