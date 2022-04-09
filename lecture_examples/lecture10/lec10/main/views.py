from django.shortcuts import render
from datetime import datetime, timedelta #чтобы получить данные о времени
from django.http import HttpResponse #чтобы могли респонс дать 
from django.template import loader

def time(request): #принимаем request
    return HttpResponse(datetime.now()) #возвращаем текущее время
# Create your views here.

def index(request):
    template=loader.get_template('main/index.html')
    blog_entry=[{'id':1,'name':"Task1","title":"title","body":"body"}]
    task_list=[{'id':1,'name':"Task1"}]
    context={"project":"Lecture 10", "today_is_weekend":True, "blog_entry":blog_entry,"task_list":task_list}
    return HttpResponse(template.render(context,request))

def hours_ahead(request, hours):
    time=datetime.now()+timedelta(hours=hours)
    return HttpResponse(time)

def hello(request):
    return HttpResponse('<h1>Hello world!</h1>') #returns http template