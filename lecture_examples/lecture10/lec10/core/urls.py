from django.urls import path
from core.views import product_list, product_detail
urlpatterns= [
    path('products/',product_list),
    #можем создать переменную и джанго это понимает и авт. передает как второй+ параметр в функцию
    path('products/<int:product_id>/',product_detail) 
]
# мы можеи создать свой собственный юрл файл в апликейшн и туда писать все пути
# и это соедржимое можем include в главном юрл файле проекта 