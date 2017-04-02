from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=155)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
