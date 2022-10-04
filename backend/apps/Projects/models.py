from sre_parse import CATEGORIES
from django.db import models

WEBSITE_WWW = 'Website WWW'
TYPES = [
    (WEBSITE_WWW, 'Website WWW'),
]

FIGMA = 'Figma'
REACT = 'React'
DJANGO = 'Django'
TECHNOLOGIES = [
    (FIGMA, 'Figma'),
    (REACT, 'React'),
    (DJANGO, 'Django'),
]

WITH_LIVE_VIEW = 'With live view'
DESIGN_PRESENTATION = 'Design presentation'
CATEGORIES = [
    (WITH_LIVE_VIEW, 'With live view'),
    (DESIGN_PRESENTATION, 'Design presentation'),
]

class TechnologiesUsed(models.Model):
    technology = models.CharField(max_length=255, choices=TECHNOLOGIES)

    def __str__(self):
        return "{}".format(self.technology)

class Project(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='')
    category = models.CharField(max_length=255, choices=CATEGORIES)
    type = models.CharField(max_length=255, choices=TYPES)
    technologies = models.ManyToManyField(TechnologiesUsed)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.pk,
                                self.name)