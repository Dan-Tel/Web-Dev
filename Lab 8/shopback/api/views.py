from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category

# Create your views here.
def product_list(request):
  products = Product.objects.all().values()
  return JsonResponse(list(products), safe=False)

def product_detail(request, id):
  try:
    product = Product.objects.get(pk=id)
    return JsonResponse({
      "id": product.id,
      "name": product.name,
      "price": product.price,
      "description": product.description,
      "count": product.count,
      "is_active": product.is_active,
      "category": product.category.id
    })
  except Product.DoesNotExist:
    return JsonResponse({"error": "Product not found"})

def category_list(request):
  categories = Category.objects.all().values()
  return JsonResponse(list(categories), safe=False)

def category_detail(request, id):
  try:
    category = Category.objects.get(pk=id)
    return JsonResponse({
      "id": category.id,
      "name": category.name
    })
  except Category.DoesNotExist:
    return JsonResponse({"error": "Category not found"})

def category_products(request, id):
  products = Product.objects.filter(category_id=id).values()
  return JsonResponse(list(products), safe=False)
