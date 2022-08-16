from django.db import models

# Create your models here.
class TranscriptModel(models.Model):
	transcript = models.TextField(null=False, unique=True)