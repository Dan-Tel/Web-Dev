"""
URL configuration for hhback project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import get_all_companies, get_company, get_all_vacancies, get_vacancy, get_vacancies_by_company, get_top_ten_vacancies

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', get_all_companies, name='get_all_companies'),
    path('api/companies/<int:company_id>/', get_company, name='get_company'),
    path('api/companies/<int:company_id>/vacancies/', get_vacancies_by_company, name='get_vacancies_by_company'),
    path('api/vacancies/', get_all_vacancies, name='get_all_vacancies'),
    path('api/vacancies/<int:vacancy_id>/', get_vacancy, name='get_vacancy'),
    path('api/vacancies/top_ten/', get_top_ten_vacancies, name='get_top_ten_vacancies'),
]
