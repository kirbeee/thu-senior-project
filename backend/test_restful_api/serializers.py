from test_restful_api.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
     class Meta:
         model = User
         fields = '__all__'