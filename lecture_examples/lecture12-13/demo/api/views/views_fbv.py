from rest_framework.decorators import api_view # поможет написать fbv апишки

from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse

from rest_framework.request import Request

from rest_framework.response import Response #расширяет HttpResponse и здесь не нужны фигни типа safe=False, является респонсом в дрф

from core.models import Category
from api.serializers import CategorySerializer, CategorySerializer2


@api_view(['GET', 'POST']) #только методы указанные здесь будут приниматься этой функцией(юрл)
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.filter(name__contains='5').order_by('-id')
        serializer = CategorySerializer2(categories, many=True)
        return Response(serializer.data) #как обычно делаем ивернем данные без ничего с респонсом

    elif request.method == 'POST':
        serializer = CategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) #как обычно и только респонс
        return Response(serializer.errors) #как обычно и только респонс


@api_view(['GET', 'PUT', 'DELETE']) # написали методы которых эта функция принимает
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return Response({'message': str(e)}, status=400) 

    if request.method == 'GET':
        serializer = CategorySerializer2(category)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CategorySerializer2(instance=category, data=request.data) #request содержит дата который в формате дикшнари, и поэтому не надо json.loads сделать а можно сразу
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        category.delete()
        return Response({'message': 'deleted'}, status=204) # все как обычно только Джейсонреспонс заменяем на респонс