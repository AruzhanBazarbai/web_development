from django.contrib import admin
from core.models import Product

admin.site.register(Product)
# мы в админ сайт(где юзерс и гроупс) добавили еще и таблицу Продукт
# и там можем этонастроить, изменить, добавить данные и т.д.
# Register your models here.
