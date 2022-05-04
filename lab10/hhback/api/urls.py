from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import company_list,company_detail,vacancy_list, vacancy_detail,company_vacancies
from .views import CompanyVacanciesAPIView, CompanyDetailAPIView, CompanyListAPIView, VacancyListAPIView, VacancyDetailAPIView, VacanciesTopTenAPIView
urlpatterns = [
    # path('companies/',company_list),
    # path('companies/<int:pk>/', company_detail),
    # path('companies/<int:pk>/vacancies/',company_vacancies),
    # path('vacancies/',vacancy_list),
    # path('vacancies/<int:pk>/',vacancy_detail),
    path('login/', obtain_jwt_token),
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', VacanciesTopTenAPIView.as_view())
]
# user: user1
# password: 123456789