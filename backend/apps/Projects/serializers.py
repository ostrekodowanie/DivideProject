from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    technologies = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'
