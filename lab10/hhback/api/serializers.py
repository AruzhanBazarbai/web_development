from asyncore import read
from dataclasses import fields
from rest_framework import serializers
from api.models import Company, Vacancy

class CompanySerializer1(serializers.Serializer):
    id=serializers.IntegerField(read_only=True)
    name=serializers.CharField()
    description=serializers.CharField()
    city=serializers.CharField()
    address=serializers.CharField()
    
    def create(self,validated_data):
        company=Company.objects.create(name=validated_data.get('name'),description=validated_data.get('description'),
                                        city=validated_data.get('city'),address=validated_data.get('address'))
        return company
    def update(self,instance,validated_data):
        instance.name=validated_data.get('name')
        instance.description=validated_data.get('description')
        instance.city=validated_data.get('city')
        instance.address=validated_data.get('address')
        instance.save()
        return instance


class CompanySerializer2(serializers.ModelSerializer):
    
    class Meta:
        model=Company
        fields=('id','name','description','city','address',)

class VacancySerializer(serializers.ModelSerializer):
    company=CompanySerializer2(read_only=True)
    company_id=serializers.IntegerField(write_only=True)
    class Meta:
        model=Vacancy
        fields=('id','name','description','salary','company','company_id',)