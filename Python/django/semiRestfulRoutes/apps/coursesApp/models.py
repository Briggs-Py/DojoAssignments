from django.db import models

class Course(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=155)
    price = models.FloatField(default=2.00)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
