from django.db import models

# Create your models here.
class Destination(models.Model):
    topic=models.CharField(max_length=500)
    desc=models.TextField()
    coll=models.CharField(max_length=100)
    img=models.FileField(upload_to='pics')


