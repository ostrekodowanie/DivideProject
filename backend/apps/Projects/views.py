from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

class ProjectView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer