from django.contrib import admin
from api.models import Company,Vacancy
@admin.register(Company) 
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    search_fields = ('id','name',) 
    list_filter = ('city',)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display=('id','name','description',)
    search_fields=('id','name','description','salary',)
    list_filter=('description',)

# Register your models here.
