from rest_framework import serializers
from .models import Student, Teacher
from dj_rest_auth.registration.serializers import RegisterSerializer

class CustomRegisterSerializer(RegisterSerializer):
    role = serializers.ChoiceField(choices=[("student", "Student"), ("teacher", "Teacher"), ("visitor", "Visitor")], required=True)
    id_card_number = serializers.CharField(max_length=15, required=False)
    employee_id = serializers.CharField(max_length=15, required=False)

    def save(self, request):
        user = super().save(request)
        role = self.validated_data.get('role')
        id_card_number = self.validated_data.get('id_card_number', None)

        if role == 'student':
            Student.objects.create(user=user, id_card_number=id_card_number)
        elif role == 'teacher':
            Teacher.objects.create(user=user)

        return user

    def validate(self, data):
        role = data.get('role')
        if role == 'student' and not data.get('id_card_number'):
            raise serializers.ValidationError("Student ID is required for students.")
        if role == 'teacher' and not data.get('department'):
            raise serializers.ValidationError("Department is required for teachers.")
        return data
