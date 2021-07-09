from django.urls import path , include
from . import views

urlpatterns = [

     path('', views.index),
     path('join', views.index),
     path('create', views.index),
]