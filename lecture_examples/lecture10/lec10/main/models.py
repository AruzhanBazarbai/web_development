from django.db import models
class Product(models.Model):
    #null=True-может принять значение нулл,blank=True- пустая строка принимается, verbose_name="название" - как будет отображаться в админке  
    name = models.CharField(max_length=250, null=True, blank=True, verbose_name="название") 
    price = models.IntegerField(default=0, verbose_name="цена")
    count = models.IntegerField(default=0, verbose_name="количество")
    #этот класс описывает таблицу 
    class Meta:
        verbose_name = "Продукт" # как таблица будет отображаться в админке
        verbose_name_plural = "Продукты" # как таблица будет отображаться в админке во множ числе
        ordering = ('-name',) # данные в таблице будет храниться в отсортированном порядке(по убыванию потому что -name)
# Create your models here.
