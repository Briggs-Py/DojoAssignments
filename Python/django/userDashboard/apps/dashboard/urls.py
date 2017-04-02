from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^profile/(?P<id>\d{1,4})$', views.profile, name="profile"),
    url(r'^profile/post/(?P<id>\d{1,4})$', views.post, name="post"),
]
