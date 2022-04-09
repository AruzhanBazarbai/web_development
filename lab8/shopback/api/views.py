from unicodedata import category
from django.shortcuts import render
from api.models import Product, Category
from api.products import products
from api.categories import categories
from django.http.response import JsonResponse

def product_list(request):
    products=Product.objects.all()
    products_json=[product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    try:
        product=Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(product.to_json())

def category_list(request):
    categories=Category.objects.all()
    categories_json=[category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request,category_id):
    try:
        category=Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message':str(e)}, status=400)
    return JsonResponse(category.to_json())

def category_products(request, category_id):
    try:
        products=Product.objects.all().filter(categoryId=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    return JsonResponse([product.to_json() for product in products], safe=False, status=200)

def post_products(request):
    p=products
    for x in p:
        prod_data={
            'name': x['name'],
            'categoryId':x['categoryId'],
            'price':x['price'],
            'description':x['description'],
            'count':x['count'],
            'is_active':x['is_active']
        }
        prod_objects=Product.objects.create(**prod_data)
    return JsonResponse(prod_objects.to_json(),status=200)
def post_categories(request):
    c=categories
    for x in c:
        catg_data={
            'name': x['name']    
        }
        ctg_objects=Category.objects.create(**catg_data)
    return JsonResponse(ctg_objects.to_json(),status=200)

# Create your views here.
