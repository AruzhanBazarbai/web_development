from asyncio.windows_events import NULL
import json
from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def companies_list(request):
    if request.method=='GET':
        companies=Company.objects.all()
        return JsonResponse([company.to_json() for company in companies],safe=False)
    elif request.method=='POST':
        data=json.loads(request.body)
        try:
            company=Company.objects.create(name=data['name'],description=data['description'],city=data['city'],address=data['address'])
        except Exception as e:
            return JsonResponse({'message':str(e)},status=400)
        return JsonResponse(company.to_json(),status=200)

@csrf_exempt
def company_detail(request,company_id):
    try:
        company=Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    
    if request.method=="GET":
        return JsonResponse(company.to_json())
    elif request.method=="PUT":
        data=json.loads(request.body)
        company.name=data['name']
        company.description=data['description']
        company.city=data['city']
        company.address=data['address']
        company.save()
        return JsonResponse(company.to_json())
    elif request.method=="DELETE":
        company.delete()
        return JsonResponse({'message':"company is deleted"},status=204)

@csrf_exempt
def vacancy_list(request):
    if request.method=='GET':
        vacancies=Vacancy.objects.all()
        return JsonResponse([vacancy.to_json() for vacancy in vacancies],safe=False)
    elif request.method=='POST':
        data=json.loads(request.body)
        company_id=data["company"]
        try:
            c=Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            return JsonResponse({'message':str(e)})
        try:
            vacancy=Vacancy.objects.create(name=data['name'],description=data['description'],salary=data['salary'],company=c)
        except Exception as e:
            return JsonResponse({'message':str(e)},status=400)
        return JsonResponse(vacancy.to_json(),status=200)

@csrf_exempt
def vacancy_detail(request,vacancy_id):
    try:
        vacancy=Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    
    if request.method=="GET":
        return JsonResponse(vacancy.to_json())
    elif request.method=="PUT":
        data=json.loads(request.body)
        company_id=data["company"]
        try:
            c=Company.objects.get(id=company_id)
            vacancy.name=data['name']
            vacancy.description=data['description']
            vacancy.salary=data['salary']
            vacancy.company=c
            vacancy.save()
        except Company.DoesNotExist as e:
            return JsonResponse({'message':str(e)})
        return JsonResponse(vacancy.to_json())

    elif request.method=="DELETE":
        vacancy.delete()
        return JsonResponse({'message':"company is deleted"},status=204)    
@csrf_exempt
def company_vacancies(request,company_id):
    try:
        current_company=Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message':str(e)})
    
    vacancies=Vacancy.objects.filter(company=current_company)
    return JsonResponse([v.to_json() for v in vacancies],safe=False)
@csrf_exempt
def vacancies_top_ten(request):
    vacancies=Vacancy.objects.all().order_by('-salary')
    v_top10=[vacancies[i].to_json() for i in range(10)]
    return JsonResponse(v_top10,safe=False)
@csrf_exempt
def companies_city(request, city_name):
    companies=Company.objects.filter(city=city_name)
    return JsonResponse([c.to_json() for c in companies],safe=False)
# Create your views here.
