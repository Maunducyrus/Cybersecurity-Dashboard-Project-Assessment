from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrganizationViewSet, EmployeeViewSet, ThreatUpdateViewSet, EducationalResourceViewSet, RegisterView, LoginView

router = DefaultRouter()
router.register(r'organizations', OrganizationViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'threat-updates', ThreatUpdateViewSet)
router.register(r'educational-resources', EducationalResourceViewSet)
router.register(r'register', RegisterView, basename='register')
router.register(r'login', LoginView, basename='login')

urlpatterns = [
    path('', include(router.urls)),
]