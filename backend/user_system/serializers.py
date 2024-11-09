from rest_framework import serializers
from .models import Student, Teacher
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.serializers import UserDetailsSerializer


class CustomRegisterSerializer(RegisterSerializer):
    role = serializers.ChoiceField(choices=[("student", "Student"), ("teacher", "Teacher")], required=True)
    student_id = serializers.CharField(max_length=15, required=False)
    employee_id = serializers.CharField(max_length=15, required=False)

    def custom_signup(self, request, user):
        role = self.validated_data.get('role')
        if role == 'student':
            student_id = self.validated_data.get('student_id')
            Student.objects.create(user=user, student_id=student_id)
        elif role == 'teacher':
            employee_id = self.validated_data.get('employee_id')
            Teacher.objects.create(user=user, employee_id=employee_id)

    def validate(self, data):
        role = data.get('role')
        if role == 'student' and not data.get('student_id'):
            raise serializers.ValidationError({"student_id": "Student ID is required for students."})
        if role == 'teacher' and not data.get('employee_id'):
            raise serializers.ValidationError({"employee_id": "Employee ID is required for teachers."})
        return data


class CustomUserDetailsSerializer(UserDetailsSerializer):
    role = serializers.SerializerMethodField()

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + 'role'

    def get_role(self):
        if hasattr(self, 'student'):
            return 'Student'
        elif hasattr(self, 'teacher'):
            return 'Teacher'
        return 'No Role'
