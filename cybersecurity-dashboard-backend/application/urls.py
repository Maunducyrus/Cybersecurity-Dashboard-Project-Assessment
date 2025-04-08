from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrganizationViewSet, EmployeeViewSet, ThreatUpdateViewSet, EducationalResourceViewSet

router = DefaultRouter()
router.register(r'organizations', OrganizationViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'threat-updates', ThreatUpdateViewSet)
router.register(r'educational-resources', EducationalResourceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]