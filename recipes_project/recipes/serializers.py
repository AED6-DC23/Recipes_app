from rest_framework import serializers
from .models import Category, Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'slug', 'category', 'ingredients', 
                 'instructions', 'cooking_time', 'image_url']

class CategorySerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'recipes']