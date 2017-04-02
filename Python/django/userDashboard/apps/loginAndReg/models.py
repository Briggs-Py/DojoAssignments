from __future__ import unicode_literals
from ..dashboard.models import Admin, Post, Comment
from django.db import models

import re, bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def validateReg(self, data):
        errors = []
        for field in data:
            if len(data[field]) == 0:
                errors.append(field + " Cannot Be Empty")
        if len(data['First_Name']) < 2:
            errors.append("First name must be more that two characters")
        if len(data['Last_Name']) < 2:
            errors.append("Last name must be more that two characters")
        if not data['First_Name'].isalpha() or not data['Last_Name'].isalpha():
    		errors.append("Name may only be letters")
        if not EMAIL_REGEX.match(data['email']):
            errors.append("Please Enter A Valid Email")
        try:
            self.get(email=data['email'])
            errors.append("Email Already Exists")
        except:
            pass
        if data['password'] != data['confirm']:
            errors.append("Passwords Must Match")
        if len(data['password']) < 8:
            errors.append("Password must be at least 8 characters")
        if len(errors) != 0:
            return {'errors': errors}
        data['password'] = bcrypt.hashpw(data['password'].encode('utf-8'), bcrypt.gensalt())
        user = self.create(first_name=data['First_Name'], last_name=data['Last_Name'], email=data['email'], password=data['password'])
        if user.id == 1:
            Admin.objects.create(user=user, privilege=4)
        return {"user": user}

    def validateLog(self, data):
        errors = []
        try:
            emailExist = self.get(email=data['email'])
            if bcrypt.hashpw(data['password'].encode('utf8'), emailExist.password.encode('utf-8')) == emailExist.password.encode('utf-8'):
                return {'user': emailExist}
            errors.append('Wrong password')
        except:
            errors.append('Email Not Registered')
        return {'errors': errors}


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=155)
    password = models.CharField(max_length=155)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
