from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"

class Recipe(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)
    ingredients = models.TextField()
    instructions = models.TextField()
    cooking_time = models.IntegerField(help_text="in minutes")
    image_url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title