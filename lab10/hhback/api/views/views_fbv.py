from rest_framework.decorators import api_view
from api.models import Company, Vacancy
from api.serializers import CompanySerializer1, CompanySerializer2, VacancySerializer
from rest_framework.response import Response

@api_view(['GET','POST'])
def company_list(request):
    if request.method=='GET':
        companies=Company.objects.all()
        serializer=CompanySerializer2(companies,many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET','PUT','DELETE'])
def company_detail(request,pk):
    try:
        company=Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method=='GET':
        serializer=CompanySerializer2(company)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=CompanySerializer2(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method=='DELETE':
        company.delete()
        return Response({'message':'deleted'}, status=204)    

@api_view(['GET','POST'])
def vacancy_list(request):
    if request.method=='GET':
        vacancies=Vacancy.objects.all()
        serializer=VacancySerializer(vacancies,many=True)
        return Response(serializer.data)
    elif request.method=='POST':
        serializer=VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET','PUT','DELETE'])
def vacancy_detail(request,pk):
    try:
        vacancy=Vacancy.objects.get(id=pk)
    except Vacancy.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method=='GET':
        serializer=VacancySerializer(vacancy)
        return Response(serializer.data)
    elif request.method=='PUT':
        serializer=VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method=='DELETE':
        vacancy.delete()
        return Response({'message':'deleted'}, status=204)    

@api_view(['GET'])
def company_vacancies(request,pk):
    if request.method=='GET':
        try:
            current_company=Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            return Response({'message':str(e)})
        
        vacancies=Vacancy.objects.filter(company=current_company)
        serializer=VacancySerializer(vacancies)
        return Response(serializer.data)

