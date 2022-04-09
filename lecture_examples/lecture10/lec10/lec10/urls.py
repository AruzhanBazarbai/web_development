"""lec10 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from main.views import hours_ahead, index
from main.views import time #import a function чтобы добавить путь к этому апликейшн 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('time/',time), #пишем путь
    path('time/plus/<int:hours>/',hours_ahead),
    path('index/',index),
    # и теперь всем путям в main_b.urls будет добавляться префикс main/(например main/hi)
    path('main_b/',include('main_b.urls')), #мы include-или все содержимое юрлс файла апликейшн мейн сюда и теперь пути написанные там видно проекту 
    path('core/',include('core.urls'))
]
