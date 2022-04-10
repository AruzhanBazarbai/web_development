from django.db import models

# 1) OneToOne relation - (for each User, we have only one Profile)
# 2) OneToMany relation - (each Category will have number of Product)
# 3) ManyToMany relation - (Product and Tag)

# class Tag(models.Model):
#     name = models.CharField(max_length=100)

#-----этот класс рекомендуется вместо ManyToManyField и является связующей таблицей между Тег и Продукт
# class ProductTag(models.Model):
#     tag = models.ForeignKey(Tag)
#     product = models.ForeignKey(Product) 

class Category(models.Model):
    name = models.CharField(max_length=200)
    #----- класс описывающий таблицу Категория
    class Meta:
        verbose_name = 'Category'  # имя в админке
        verbose_name_plural = 'Categories' # имя во множ числе в админке
        # ordering = ('name',) #будем сортировать по имени в возр.порядке

    def to_json(self): #функция чтобы возвращать в джейсон формате
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self): #эта функция вот так возвращает данные о строке и так видно в админке
        return f'{self.id}: {self.name}' 


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    # мы связываем эту строку/таблицу с таблицей категорией и получается OneToMany relationship(у одной категории может быть несколько продуктов)
    # форейн ки играет эту роль
    # и можем перейти к другой таблице(если связаны) и использовать данные
    #  on_delete=models.CASCADE- если удалить категорию(то есть праймари ки) то связанные продукты удалятся
    # null=True- чтобы если есть существующие строки то у них появлялись нулл вместо категории
    # related_name='products'- по этой имени можем обращаться к продуктам связанным
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True,
                                 related_name='products')

    # tags = models.ManyToManyField(Tag) #строка чтобы связать с таблицей тег в ManyToMany отношении

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.id}: {self.name} | {self.price}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description
        }

# Create your models here.
