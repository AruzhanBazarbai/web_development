from django.shortcuts import Http404 #импортируем чтобы при ошибке со стороны клиента это выдать
from rest_framework.response import Response
from rest_framework.views import APIView # поможет написать cbv api
from rest_framework import status #поможет определять и выдать статус запроса и результата

from api.serializers import CategorySerializer2
from core.models import Category


class CategoryListAPIView(APIView): #напишем класс который расширяет APIView
    def get(self, request):
        categories = Category.objects.filter(name__contains='5').order_by('-id')
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK) # как обычно и вернем с респонс указывая статус

    def post(self, request):
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    def get_object(self, pk): # эта функция берет пк и вернет нужный объект
        try:
            return Category.objects.get(id=pk)
        except Category.DoesNotExist as e:
            raise Http404 #если не найдет то выдает ошибку 404

    #pk из юрл передается сюда, это сокращенно праймари ки и в APIView это рассматривается как специальный ключь и по умолчанию pk=None
    # чтобы ошибок не было
    def get(self, request, pk=None):
        category = self.get_object(pk) # в ту функцию передает пк и дальше все как обычно
        serializer = CategorySerializer2(category)
        return Response(serializer.data)

    def put(self, request, pk=None):
        category = self.get_object(pk)
        serializer = CategorySerializer2(instance=category, data=request.data)  #request.дата в формате дикшнари, и поэтому не надо json.loads сделать а можно сразу
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) 
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        category = self.get_object(pk)
        category.delete()
        return Response({'message': 'deleted'}, status=204)