from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Notes

from .serializers import NoteSerializer


@api_view(['GET'])
def get_notes(request):
    notes = Notes.objects.all()

    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def get_note(request, pk):
    note = Notes.objects.get(id=pk)

    serializer = NoteSerializer(note, many=False)

    return Response(serializer.data)