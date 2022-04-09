# import imp
from django.urls import path
from api.views import product_list, product_detail, category_list, category_detail, category_products
from api.views import post_products, post_categories
urlpatterns=[
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/',category_list),
    path('categories/<int:category_id>/',category_detail),
    path('categories/<int:category_id>/products/',category_products),
    path('products/post/',post_products),
    path('categories/post/',post_categories)
]