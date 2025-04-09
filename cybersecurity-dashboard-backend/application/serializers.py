from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Organization, Employee, ThreatUpdate, EducationalResource

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        # fields = ('id', 'username', 'email', 'is_master_admin', 'is_organization_admin')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'is_master_admin', 'is_organization_admin')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            is_master_admin=validated_data.get('is_master_admin', False),
            is_organization_admin=validated_data.get('is_organization_admin', False)
        )
        return user



# models serializers

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