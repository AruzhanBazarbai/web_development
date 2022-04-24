from rest_framework import serializers
from core.models import Category, Product

#  мы обычно сами превратили модельки в дикшнари с помощью функции to_json(). и это в дрф реализована\replaced в виде serializer
# и просто когда нужен serializer будем вызывать эти написанные классы/serializerы
'''
напишем класс который екстендс serializers.Serializer чтобы использовать его функции
1) и сначала напишем fields которые есть а таблице и можем добавить параметр read_only=True
2)это для хттп метода create. туда передается как параметр сначаоа селф а потом данные которые прошли проверку на валидность
и создается новая категория
3)для апдейта. instance-данные которого нужно изменить(апдейтить) а validated_data- новые данные на которых нужно изменить
и так как это апдейт нужно сделать instance.save()
-----
'''
class CategorySerializer(serializers.Serializer):
    id=serializers.IntegerField(read_only=True) # 1
    name=serializers.CharField()

    def create(self,validated_data): #2
        category=Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data): #3
        instance['name']=validated_data['name']
        instance.save()
        return instance

class Product2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description')


"""
также можем написать класс serializers который расширяет serializers.ModelSerializer
туда не надо никакой fields написать или написать режим read_only=True для праймари ки, это все автоматически и не надо писать функции для 
методов
1)name = serializers.CharField(read_only=True) только для обычных столбцов можем добавить дополнительные функции написав в начале или в 
классе Мета
2)только надо написать класс Мета который соедржит данные с какиой моделькой работаем и какие столбцы есть и т.д.
в model укажем с какой моделькой работаем
 в fields какие там столбцы есть
и все
теперь когда вызываем serializer нужные функции по умолчанию сами вызываются и сами выполняются

"""

class CategorySerializer2(serializers.ModelSerializer):
    name = serializers.CharField()
    # name = serializers.CharField(read_only=True) #1
    """
    есть три типа взять данные другой таблицы, с которой связаны:
    1)PrimaryKeyRelatedField- это по умолчанию. покажется только айдишки
    2)StringRelatedField- обращаются в to_string() метод который есть в модельке и оттуда превратит в стринговый формат и выведет
    3)Product2Serializer- с помощью сериалайзера выведет в формате объекты все зависимые продукты
    !!!(many=True, read_only=True)-это написать обязательно чтобы ошибок не было
    """
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True) 
    # products = serializers.StringRelatedField(many=True, read_only=True)
    # products = Product2Serializer(many=True, read_only=True)

    class Meta: #2
        model = Category
        fields = ('id', 'name',)
        # read_only_fields = ('name',) #1


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer2(read_only=True) # выведет данные про категорию от которой зависима(как объект), и только для чтения
    # сами можем добавить еще поле и теперь чтобы ввести данные про категорию продукты нужно будет всего ввести айди категории(так как режим write_only)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'category', 'category_id',)