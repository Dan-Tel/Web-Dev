from django.shortcuts import render
from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Create your views here.
def get_all_companies(request):
  companies = Company.objects.all()
  serializer = CompanySerializer(companies, many=True)
  return JsonResponse(serializer.data, safe=False)

def get_company(request, company_id):
  try:
    company = Company.objects.get(id=company_id)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data, safe=False)
  except Company.DoesNotExist:
    return JsonResponse({'error': 'Company not found'}, status=404)

def get_all_vacancies(request):
  vacancies = Vacancy.objects.all()
  serializer = VacancySerializer(vacancies, many=True)
  return JsonResponse(serializer.data, safe=False)

def get_vacancy(request, vacancy_id):
  try:
    vacancy = Vacancy.objects.get(id=vacancy_id)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data, safe=False)
  except Vacancy.DoesNotExist:
    return JsonResponse({'error': 'Vacancy not found'}, status=404)

def get_vacancies_by_company(request, company_id):
  try:
    company = Company.objects.get(id=company_id)
    vacancies = Vacancy.objects.filter(company=company)
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
  except Company.DoesNotExist:
    return JsonResponse({'error': 'Company not found'}, status=404)

def get_top_ten_vacancies(request):
  vacancies = Vacancy.objects.order_by('-salary')[:10];
  serializer = VacancySerializer(vacancies, many=True)
  return JsonResponse(serializer.data, safe=False)
