from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='my_index'),
    url(r'^process$', views.process),
    url(r'^remove/(?P<id>\d{1,4})$', views.remove),
    url(r'^goback$', views.goback),
    url(r'^delete/(?P<id>\d{1,4})$', views.delete)

]
