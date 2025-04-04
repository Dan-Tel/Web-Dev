"""
URL configuration for shopback project.

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
from api.views import product_list, product_detail, category_list, category_detail, category_products

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/products/', product_list, name='product-list'),
    path('api/products/<int:id>/', product_detail, name='product-detail'),
    path('api/categories/', category_list, name='category-list'),
    path('api/categories/<int:id>/', category_detail, name='category-detail'),
    path('api/categories/<int:id>/products/', category_products, name='category-products')
]
