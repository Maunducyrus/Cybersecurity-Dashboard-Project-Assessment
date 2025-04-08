from rest_framework import serializers
from .models import Organization, Employee, ThreatUpdate, EducationalResource

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class ThreatUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThreatUpdate
        fields = '__all__'

class EducationalResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationalResource
        fields = '__all__'