from rest_framework import generics # представляет готовые методы чтобы не писать банальные строки кода
from rest_framework import mixins # тоже облегчает жизнь

from api.serializers import CategorySerializer2
from core.models import Category
"""
генерикс- содержит классы/методы которые записанные заранее коды для удовлетворения хттп запросов и 
нам остается только использовать для нужных моделей
"""
#напишем класс который расширяет все это и содержит код для апишки
class CategoryListAPIView(mixins.ListModelMixin, # предоставляет функцию где все элементы массива возвращаются
                          mixins.CreateModelMixin, # функция чтобы создать и добавить это в бд
                          generics.GenericAPIView): # предоставляют функции разные(методы хттп и т.д.)
    queryset = Category.objects.all() #должны указать содержимое queryset, то есть все данные модельки
    serializer_class = CategorySerializer2  #и еще должны указать serializer_class, которого нужно использовать для форматирования данных 

    def get(self, request, *args, **kwargs): # оверрайдим функцию ГенерикАПИ для получения данных (аргс и куаргс передаем просто так)
        return self.list(request, *args, **kwargs) #  и здесь используем функцию ListModelMixin для облегчения жизни

    def post(self, request, *args, **kwargs):# для добавления данных новых 
        return self.create(request, *args, **kwargs) # функция CreateModelMixin


class CategoryDetailAPIView(mixins.RetrieveModelMixin, # для получения только одного данного 
                            mixins.UpdateModelMixin, # для апдейта
                            mixins.DestroyModelMixin, #  для удаления
                            generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    # lookup_field = 'category_id' # можем так указывать и использовать вместо пк например категори_айди

    def get(self, request, *args, **kwargs): # функция для метода гет
        return self.retrieve(request, *args, **kwargs) # для получения только одного данного

    def put(self, request, *args, **kwargs):# для метода апдейт
        return self.update(request, *args, **kwargs)# для апдейта

    def delete(self, request, *args, **kwargs):# для метода делит
        return self.destroy(request, *args, **kwargs) # для удаления