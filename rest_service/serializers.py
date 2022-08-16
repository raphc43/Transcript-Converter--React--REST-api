from rest_framework import serializers
#from django.conrib.auth.models import User
from .models import TranscriptModel

# Serializer class
class TranscriptSerializer(serializers.ModelSerializer):
	class Meta:
		model = TranscriptModel
		fields = '__all__'
