from django.shortcuts import render
from django.http.response import JsonResponse
from core.models import Product 

def product_list(request):
    # Select * FROM core_product
    products=Product.objects.all()
    products_json=[product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    #SELECT * FROM core_product
    try:
        product=Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(product.to_json())

# Create your views here.
