from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

class ProjectView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

def ImagesUrls(request, id):
    obj = Project.objects.get(pk=id)
    context= {
        'object': obj
    }
    return render(request, 'dist/index.html', context)