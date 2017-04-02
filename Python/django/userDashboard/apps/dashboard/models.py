from __future__ import unicode_literals
from django.db import models

class Admin(models.Model):
    user = models.OneToOneField('loginAndReg.User')
    privilege = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Post(models.Model):
    title = models.CharField(max_length=45)
    post = models.TextField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('loginAndReg.User', related_name="user_posts")

class Comment(models.Model):
    comment = models.TextField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('loginAndReg.User', related_name="user_comments")
    post = models.ForeignKey(Post, related_name="post_comments")
