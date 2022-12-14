from django.db import models

WEBSITE = 'Website'
APPLICATION = 'Application'
TYPES = [
    (WEBSITE, 'Website'),
    (APPLICATION, 'Application'),
]

FIGMA = 'Figma'
REACT = 'React'
DJANGO = 'Django'
TECHNOLOGIES = [
    (FIGMA, 'Figma'),
    (REACT, 'React'),
    (DJANGO, 'Django'),
]

class TechnologiesUsed(models.Model):
    technology = models.CharField(max_length=255, choices=TECHNOLOGIES)
    
    def __str__(self):
        return "{}".format(self.technology)

class Project(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='')
    type = models.CharField(max_length=255, choices=TYPES)
    technologies = models.ManyToManyField(TechnologiesUsed)
    link = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.pk,
                                self.name)