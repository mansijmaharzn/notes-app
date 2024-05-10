from django.urls import path

from . import views

urlpatterns = [
    path('notes/', views.get_notes, name='get_notes'),
    path('notes/<int:pk>/', views.get_note, name='get_note'),
]