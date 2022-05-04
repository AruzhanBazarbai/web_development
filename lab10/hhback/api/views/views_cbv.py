from rest_framework.views import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer1, CompanySerializer2, VacancySerializer
from rest_framework.response import Response
from django.shortcuts import Http404
from rest_framework.permissions import IsAuthenticated

class CompanyListAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        companies = Company.objects.all()
        serializer=CompanySerializer2(companies,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
class CompanyDetailAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get_object(self,pk):
        try:
            company=Company.objects.get(id=pk)
            return company
        except Company.DoesNotExist as e:
            raise Http404

    def get(self,request,pk=None):
        company=self.get_object(pk)
        serializer=CompanySerializer2(company)
        return Response(serializer.data)
    def put(self,request,pk=None):
        company = self.get_object(pk)
        serializer=CompanySerializer2(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    def delete(self,request,pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({'message':'deleted'})


class VacancyListAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class VacancyDetailAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            vacancy = Vacancy.objects.get(id=pk)
            return vacancy
        except Vacancy.DoesNotExist as e:
            raise Http404

    def get(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({'message': 'deleted'})


class CompanyVacanciesAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request,pk):
        try:
            cur_company=Company.objects.get(id=pk)
        except Company.DoesNotExist as e:
            raise Http404

        vacancies=Vacancy.objects.filter(company=cur_company)
        return Response(VacancySerializer(vacancies,many=True).data)

# @csrf_exempt
# def vacancies_top_ten(request):
#     vacancies=Vacancy.objects.all().order_by('-salary')
#     v_top10=[vacancies[i].to_json() for i in range(10)]
#     return JsonResponse(v_top10,safe=False)

class VacanciesTopTenAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        vacancies=Vacancy.objects.all().order_by('-salary')
        v_top10=[vacancies[i].to_json() for i in range(10)]
        return Response(v_top10)