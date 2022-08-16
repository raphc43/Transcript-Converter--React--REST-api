from django.contrib import admin
from django.urls import path, include
from .views import TranscriptViewSet
app_name = 'transcript'

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'transcript_data', TranscriptViewSet)

app_name = 'tanscript_rest'

urlpatterns = [
	path('rest/', include(router.urls)),
    #path('rest/transcript_data', rest_transcript, name='rest_transcript'),
	]
