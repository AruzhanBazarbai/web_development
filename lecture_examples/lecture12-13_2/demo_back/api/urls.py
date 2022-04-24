from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from .views import category_list, category_detail, CategoryListAPIView, CategoryDetailAPIView, ProductDetailAPIView, ProductListAPIView

urlpatterns=[
    # path('categories/', category_list),
    # path('categories/<int:category_id>/', category_detail),

    path('login/' , obtain_jwt_token),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),
]
'''
login:
-body
{
    "username":"aruzhan",
    "password":123456789
}
-tests
let response= JSON.parse(responseBody);
postman.setEnvironmentVariable('token',response.token);
-Auth in headers
Authorization - Bearer {{token}}
'''
