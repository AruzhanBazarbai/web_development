from django.urls import path
from main.views import hello
urlpatterns=[
    path('hi/',hello)
]
# мы можеи создать свой собственный юрл файл в апликейшн и туда писать все пути
# и это соедржимое можем include в главном юрл файле проекта 