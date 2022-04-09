from pyexpat import model
from django.db import models

'''
create table core_product(
    id INTEGER,
    name VARCHAR (300),
    price NUMBER DEFAULT 0
)
'''
# создали класс Продукт который extends models.Model
# этот класс является таблицой бд и имеет один столбец id
# который автоматически создается и является primary key
# и можем создать еще столбцы(name, price ) с задаt' properties
# max_length-макс длина строки которая может быть
#   FloatField(default=0) - то есть прайс по умолчанию равно 0
# по сути это равно создание таблиц в скл которого написала выше

class Product(models.Model):
    name=models.CharField(max_length=200)
    price=models.FloatField(default=0)
    description= models.TextField(default='')
    def to_json(self):
        return {
            'id': self.id,
            'name':self.name,
            'price': self.price,
            'description': self.description
        }
# Create your models here.
