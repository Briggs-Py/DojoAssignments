from django.shortcuts import render, redirect
from .models import Admin, Post, Comment
from django.core.urlresolvers import reverse
from ..loginAndReg.models import User


def index(request):
    return render(request, "dashboard/index.html")

def profile(request, id):
    context = {
    'posts':Post.objects.filter(user=id)
    }
    return render(request, "dashboard/profile.html", context)

def post(request, id):
    user = User.objects.get(id=id)
    post = Post.objects.create(title="Mr. Dill wrote ", post=request.POST['post'], user=user)
    return redirect(reverse("user:profile", kwargs={'id': user.id}))
