from django.shortcuts import render
# Create your views here.
from .models import TranscriptModel


from .serializers import TranscriptSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets


# Create your views here.

class TranscriptViewSet(viewsets.ModelViewSet):
	queryset = TranscriptModel.objects.all()
	serializer_class = TranscriptSerializer

'''@api_view(['GET', 'POST'])
def rest_transcript(request):
	if request.method == 'GET':
		transcripts = TranscriptModel.objects.all()
		serializer = TranscriptSerializer(transcripts, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		transcripts = TranscriptModel()
		transcripts.save(request.POST)
		return 'stored transcript successfully'''