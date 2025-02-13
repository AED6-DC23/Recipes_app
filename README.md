BackEnd:

Сначала создадим новый проект Django и установим необходимые зависимости:

pip install django djangorestframework drf-yasg django-cors-headers
django-admin startproject recipes_project
cd recipes_project
python manage.py startapp recipes



Fronted:

npx create-react-app recipes-frontend
cd recipes-frontend
npm install react-router-dom axios

Замените папки src и public из github в папку recipes-frontend


Как запустить приложение:
  1. Запустите бэкенд:
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser  # создайте админа для добавления рецептов
python manage.py runserver

  2.Запустите фронтенд:
cd recipes-frontend
npm start
