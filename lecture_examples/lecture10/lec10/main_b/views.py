# import imp
from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta
def hello(request):
    return HttpResponse('<h1>Hello world!</h1>') #returns http template

def show_time(request,hours):
    current_time=datetime.now()+timedelta(hours=int(hours))
    return HttpResponse(f'<h1>Time: {current_time}</h1>') # форматирование

# def product_list(request):
#     return HttpResponse('<h1>List of products</h1>')

# def product_detail(request, product_id):
#     return HttpResponse(f'<h1>product detail page: {product_id}</h1>')

products = [
    {
        'id':i,
        'name': f'Product {i}',
        'price': i*1000
    }
    for i in range(1,10)
]

def product_list(request):
    return JsonResponse(products,safe=False)

def product_detail(request, product_id):
    for product in products:
        if product['id']==product_id:
            return JsonResponse(product)
    return JsonResponse({'message':'selected product not found'})

# Create your views here.
