from django.urls import path
from api.views import companies_list,company_detail,vacancy_list, vacancy_detail,\
    company_vacancies,vacancies_top_ten, companies_city
urlpatterns = [
    path('companies/',companies_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/',company_vacancies),
    path('vacancies/',vacancy_list),
    path('vacancies/<int:vacancy_id>/',vacancy_detail),
    path('vacancies/top_ten/',vacancies_top_ten),
    path('companies/<str:city_name>/',companies_city)
]