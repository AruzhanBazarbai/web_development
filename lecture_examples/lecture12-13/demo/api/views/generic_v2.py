from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated

from api.serializers import CategorySerializer2, ProductSerializer
from core.models import Category, Product

# также можем еще больше упростить и использовать готовые классы генерикс в которых содержится нужные классы для соответствующих хттп запросов
# эти классы/функции расщиряет mixins и так что будет возвращать тот же результат
class CategoryListAPIView(generics.ListCreateAPIView):# этот класс содержит функции для возвращения листа, добавления в лист нового эл 
    # есть два метода указывания значения queryset
    # 3-также можем определять значения queryset, то есть юзеру будут видны категории которые он сам создал(это возможно т.к. в рекуесте записывается какой же юзер вошел)
    def get_queryset(self):# 1
        return Category.objects.all() 
        # return Category.objects.filter(user=self.request.user) #3
    # queryset = Category.objects.all()# 2
    serializer_class = CategorySerializer2 #указываем какой сериалайзер использовать
    permission_classes = (IsAuthenticated,) #чтобы эту стр могли посмотреть лишь авторизованные пользователи

#этот generics.RetrieveUpdateDestroyAPIView класс содержит функции для получения одного данного, апдейта, удаления
class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all() # и только осталось указывать их значения 
    serializer_class = CategorySerializer2

#то же самое пишем для продуктов
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer