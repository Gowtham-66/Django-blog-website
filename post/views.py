from django.shortcuts import render
from .models import Destination
from collections import defaultdict

def index(request):
    
    dests=Destination.objects.all()

    # Organize data by collections using defaultdict
    dests_by_collection = defaultdict(list)
    for dest in dests:
        dests_by_collection[dest.coll].append(dest)

    return render(request, 'index.html', {'dests_by_collection': dict(dests_by_collection)})
