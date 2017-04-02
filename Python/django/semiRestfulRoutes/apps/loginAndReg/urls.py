from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^logging$', views.login, name='logging'),
    url(r'^success$', views.success, name='success'),
    url(r'^logout$', views.logout, name='logout')
]
