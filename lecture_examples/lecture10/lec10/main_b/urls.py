from django.urls import path, re_path
from main_b.views import hello, show_time, product_list, product_detail
urlpatterns= [
    path('hi/',hello),
    #если брать регексный паттерн в скобку то значение передается в функцию
    re_path('time/plus/(\d{2})/',show_time),
    path('products/',product_list),
    #можем создать переменную и джанго это понимает и авт. передает как второй+ параметр в функцию
    path('products/<int:product_id>/',product_detail) 
]
# мы можеи создать свой собственный юрл файл в апликейшн и туда писать все пути
# и это соедржимое можем include в главном юрл файле проекта 