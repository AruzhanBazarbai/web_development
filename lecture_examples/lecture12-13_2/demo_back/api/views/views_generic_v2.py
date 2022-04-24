from rest_framework import generics
from api.models import Category, Product
from api.serializers import CategorySerializer2, ProductSerializer
from rest_framework.permissions import IsAuthenticated

class CategoryListAPIView(generics.ListCreateAPIView):
    def get_queryset(self):
        # return Category.objects.filter(user=self.request.user)
        return Category.objects.all()
    # queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    permission_classes = (IsAuthenticated,)

class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer