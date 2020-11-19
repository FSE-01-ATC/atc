from rest_framework import serializers
from django.contrib.auth import get_user_model

from roles.models import Professor, TeacherAssistant


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('first_name', 'last_name')


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        try:
            user = get_user_model().objects.get(email=data['email'])
            valid_password = user.check_password(data['password'])
            if user and user.is_active and valid_password:
                return user
            else:
                return serializers.ValidationError("Incorrect credentials")
        except:
            return serializers.ValidationError("Incorrect credentials")


class TASerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = TeacherAssistant
        fields = '__all__'


class ProfessorSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    likes = TASerializer(read_only=True, many=True)
    dislikes = TASerializer(read_only=True, many=True)

    class Meta:
        model = Professor
        fields = '__all__'


class ProfessorDislikesSerializer(serializers.ModelSerializer):
    dislikes = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
    )

    class Meta:
        model = Professor
        fields = ('id', 'dislikes')
