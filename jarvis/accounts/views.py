from django.contrib.auth import get_user_model
from rest_framework import decorators, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserCreateSerializer, CustomTokenObtainPairSerializer


User = get_user_model()


class LoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.IsAuthenticated])
def user_retrieve(request):
    return Response({}, status.HTTP_200_OK)


@decorators.api_view(['POST'])
@decorators.permission_classes([permissions.AllowAny])
def register(request):
    serializer = UserCreateSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
    user = serializer.save()
    refresh = RefreshToken.for_user(user)
    payload = {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
    return Response(payload, status.HTTP_201_CREATED)
