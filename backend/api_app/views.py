from django.http import JsonResponse
from .data import COURSES, TASKS


def ping(request):
	"""Simple health check endpoint."""
	return JsonResponse({"status": "ok", "message": "pong"})


def courses_list(request):
	"""Return a JSON list of courses."""
	return JsonResponse(COURSES, safe=False)


def tasks_list(request):
	"""Return a JSON list of tasks."""
	return JsonResponse(TASKS, safe=False)
