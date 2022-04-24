import json

from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from core.models import Category
from api.serializers import CategorySerializer, CategorySerializer2
# !!!! вместо CategorySerializer2 можно использовать CategorySerializer, код не надо изменить, 
# только напишем CategorySerializer там где надо было написать CategorySerializer2
'''
1)все как обычно пишем, в методе Гет  serializer нужен лишь для конвертирования данных
2)передаем в CategorySerializer2 categories, то есть моделькм которых надо превратить в дикшнари
many=True- так как много категории передаем а не один
3)вернем данные, то есть serializer.datа
4) в методе ПОСТ(для создания)
5) в сериалайзор вот так передаем данные которые получили от клиента
6) сохраняем(только тогда вызывается функция create если использовали CategorySerializer)
'''
@csrf_exempt
def category_list(request):
    if request.method=="GET":# 1
        categories=Category.objects.filter(name__contains='5').order_by('-id')
        serializer=CategorySerializer2(categories, many=True) # 2
        return JsonResponse(serializer.data,safe=False)# 3

    elif request.method == 'POST': # 4
        data = json.loads(request.body)
        serializer=CategorySerializer2(data=data) # 5
        if serializer.is_valid():
            serializer.save() # 6
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

"""
1)в методе гет все как обычно с serializer
2) в методе Пут по другому
3)в serializer передаем в instance категорию которую надо изменить а в дата-данные на которых нужно изменить
4)и сохраяем(вызывается функция апдейт если использовали CategorySerializer)
5)во время удаления как обычно(к удалению serializer не нужен)
"""

@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET': #1
        serializer=CategorySerializer2(category)
        return JsonResponse(serializer)
    elif request.method == 'PUT': #2
        data = json.loads(request.body)
        serializer=CategorySerializer2(instance=category,data=data) #3
        if serializer.is_valid():
            serializer.save() #4
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE': #5
        category.delete()
        return JsonResponse({'message': 'deleted'}, status=204)