from django.contrib import admin

from core.models import Product, Category

# можем вот так добавить модуль в админку, и этот способ позволяет лучше управлять 
@admin.register(Product) # это обязательно надо писать перед классом
class ProductAdmin(admin.ModelAdmin): # напишем класс для продукта который расширяет admin.ModelAdmin
    list_display = ('id', 'name', 'price', 'description', 'category',) # эти данные будут отображаться на таблицах(внешне) 
    search_fields = ('name', 'price',) # по этим данным можем поиск делать
    list_filter = ('category',) # сбоку будет список категории, если нажать на них то покажут только связанные продукты


admin.site.register(Category)