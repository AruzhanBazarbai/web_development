from rest_framework import generics
from rest_framework import mixins
from api.models import Category
from api.serializers import CategorySerializer2

class CategoryListAPIView(generics.GenericAPIView,
                          mixins.CreateModelMixin,
                          mixins.ListModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    def get(self,request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
class CategoryDetailAPIView(generics.GenericAPIView,
                            mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
    # lookup_field = 'category_id'
    def get(self,request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def delete(self,request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)