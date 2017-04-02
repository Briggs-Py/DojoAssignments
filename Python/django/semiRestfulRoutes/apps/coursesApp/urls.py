from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^process$', views.process, name='process'),
    url(r'^remove/(?P<id>\d{1,4})$', views.remove, name='remove'),
    url(r'^remove/goback$', views.goback, name='goback'),
    url(r'^remove/delete/(?P<id>\d{1,4})$', views.delete, name='delete')

]
