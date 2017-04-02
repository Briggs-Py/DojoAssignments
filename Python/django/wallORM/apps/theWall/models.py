from __future__ import unicode_literals

from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Post(models.model):
    title = models.CharField(max_length=45)
    message = models.TextField(max_length=1000)
    user_id = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Comment(models.model):
    title = models.CharField(max_length=45)
    comment = models.TextField(max_length=1000)
    user_id = models.ForeignKey(User)
    post_id = models.ForeignKey(Post) 
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
