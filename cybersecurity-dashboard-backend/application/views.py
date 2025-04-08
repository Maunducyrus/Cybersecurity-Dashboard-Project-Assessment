# Create your views here.

from rest_framework import viewsets
from .models import Organization, Employee, ThreatUpdate, EducationalResource
from .serializers import OrganizationSerializer, EmployeeSerializer, ThreatUpdateSerializer, EducationalResourceSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class ThreatUpdateViewSet(viewsets.ModelViewSet):
    queryset = ThreatUpdate.objects.all()
    serializer_class = ThreatUpdateSerializer

class EducationalResourceViewSet(viewsets.ModelViewSet):
    queryset = EducationalResource.objects.all()
    serializer_class = EducationalResourceSerializer
