from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from recipes.views import CategoryViewSet, RecipeViewSet
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Recipes API",
        default_version='v1',
        description="API for recipes application",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),
]