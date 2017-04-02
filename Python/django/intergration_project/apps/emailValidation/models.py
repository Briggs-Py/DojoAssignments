from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class EmailManager(models.Manager):
    def validate(self, email):
        if len(email) < 1:
            return False
        if EMAIL_REGEX.match(email):
            return True
        else:
            return False

class Email(models.Model):
    email = models.CharField(max_length=155)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = EmailManager()
