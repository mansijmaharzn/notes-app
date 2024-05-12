from django.urls import path

from . import views

urlpatterns = [
    path('notes/', views.get_notes, name='get_notes'),
    path('notes/<int:pk>/update', views.update_note, name='update_note'),
    path('notes/<int:pk>/delete', views.delete_note, name='delete_note'),
    path('notes/<int:pk>/', views.get_note, name='get_note'),
]