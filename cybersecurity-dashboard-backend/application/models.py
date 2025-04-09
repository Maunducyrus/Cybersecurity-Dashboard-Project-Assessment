# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    is_master_admin = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions'
    )

class Organization(models.Model):
    name = models.CharField(max_length=128)
    subscription_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Employee(models.Model):
    name = models.CharField(max_length=128)
    organization = models.ForeignKey(Organization, related_name='employees', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class ThreatUpdate(models.Model):
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message[:50]

class EducationalResource(models.Model):
    RESOURCE_TYPES = [
        ('video', 'Video'),
        ('blog', 'Blog'),
    ]

    title = models.CharField(max_length=128)
    content = models.TextField()
    resource_type = models.CharField(max_length=50, choices=RESOURCE_TYPES)

    def __str__(self):
        return self.title
