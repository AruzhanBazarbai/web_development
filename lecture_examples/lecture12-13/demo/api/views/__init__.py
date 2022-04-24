'''
можем создать (если вьюшек много) папку views где можем писать несколько файлов вьюшек с разными логиками и можем
сюда внедрять/импортироватьт view-шки а потом когда как обычно навязывается с пас/юрлками в юрл.пай отсюда берутся вьюшки
'''
# from .views_w11 import category_list, category_detail
# from .views_w12 import category_list, category_detail
from .views_fbv import category_list, category_detail
# from .views_cbv import CategoryListAPIView, CategoryDetailAPIView
# from .views_generic_v1 import CategoryListAPIView, CategoryDetailAPIView
from .generic_v2 import CategoryListAPIView, CategoryDetailAPIView, \
    ProductListAPIView, ProductDetailAPIView