from django.contrib.auth import get_user_model
from rest_framework import decorators, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserCreateSerializer, CustomTokenObtainPairSerializer


User = get_user_model()


def update_unique_error_messages(errors):
    """Update error messages with regards to the unique constraint.

    TODO: Update error messages for unique inside User model.
    """
    for field, error in errors.items():
        exists = (
            f'user with this email address already exists.',
            f'user with this {field} already exists.',
            f'A user with that {field} already exists.'
        )
        for exist in exists:
            if exist in error:
                error.remove(exist)
                error.append(f'An account already exists with this {field}.')
    return errors


class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def user_retrieve(request):
    user = {
        'username': request.user.username,
        'email': request.user.email,
        'id': request.user.id
    }
    return Response(user, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.AllowAny])
def register(request):
    serializer = UserCreateSerializer(data=request.data)
    if not serializer.is_valid():
        update_unique_error_messages(serializer.errors)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    user = serializer.save()
    refresh = RefreshToken.for_user(user)
    payload = {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
    return Response(payload, status.HTTP_201_CREATED)
