from django.urls import path
from .views import ping, courses_list, tasks_list

urlpatterns = [
    path('ping/', ping, name='ping'),
    path('courses/', courses_list, name='courses_list'),
    path('tasks/', tasks_list, name='tasks_list'),
]
