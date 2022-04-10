import json

from django.http.response import JsonResponse
# если хотим внестии изменения(put,delete,post), то т.к. это фронтенд часть и работа csrf_exempt, мы должны его импортировать чтобы имитировать
from django.views.decorators.csrf import csrf_exempt  

from core.models import Category

@csrf_exempt # перед каждым классом, где используем обязательно надо ставить это
def category_list(request): 
    # у request есть разные данные и один из них заданный хттп method юзером
    # request-ы могут быь разными но в одинаковых юрл
    # 'categories/' в этом юрл вызывается эта функция а дальше разберемся по методу хттп запроса
    # и если метод 'GET' то передаем данные
    if request.method == 'GET':  
        categories = Category.objects.all()
        categories_json = [category.to_json() for category in categories]
        return JsonResponse(categories_json, safe=False)
    # и если метод 'POST' то добавляем переданные данные в таблицу бд(создаем новые данные)
    elif request.method == 'POST':
        data = json.loads(request.body) # request еще хранит  body(заданные данные от клиента в формате строки) и его надо в джсон превратить
        try:
            category = Category.objects.create(name=data['name'])  # добавляем данные в таблицу бд 
        except Exception as e:
            return JsonResponse({'message': str(e)})

        return JsonResponse(category.to_json())


@csrf_exempt
def category_detail(request, category_id):
    #  request Хранит разные данные и один из них заданный хттп method юзером
    # request-ы могут быь разными но в одинаковых юрл
    # 'categories/<int:category_id>/'- при этом юрл вызывается эта функция и по типу хттп запроса выявляем что нужно юзеру и выполняем
    # сначала надо брать из бд нужную категорию по айди
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    # и если метод 'GET' то передаем данные
    if request.method == 'GET':
        return JsonResponse(category.to_json())
    # и если метод 'PUT' то обновляем данные
    elif request.method == 'PUT':
        data = json.loads(request.body)
        category.name = data['name'] # обновляем но это еще не передалось в бд   
        category.save() # передаем в бд обновленные данные
        return JsonResponse(category.to_json())
    elif request.method == 'DELETE':
        category.delete() #удаляем эту категорию если тип запроса 'DELETE'
        return JsonResponse({'message': 'deleted'}, status=204)

# бд методы
# categories = Category.objects.filter(name='category 5')
# categories = Category.objects.filter(name__startswith='cat')
# categories = Category.objects.filter(name__endswith='ed')
# categories = Category.objects.filter(name__contains='update')
# categories = Category.objects.filter(id__in=[1, 2, 3, 4])
# categories = Category.objects.filter(name__contains='5').order_by('-id')