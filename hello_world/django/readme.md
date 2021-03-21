# Hello World em Django (windows)
-> Instalar virtualenv
- pip3 install virtualenv

-> Criar o ambiente virtual com o virtualenv
- virtualenv venv

-> Inciar o ambiente virtual
(windows - gitbash)
source venv\Scripts\activate

-> Instalação do Django
- pip install django

-> Verificar versão
- django-admin --version

-> Iniciando novo projeto:
- django-admin startproject helloworld

-> Testar o projeto
- cd ./helloworld
- python manage.py runserver

-> Criando um módulo (home)
- django-admin startapp home

-> Registrar o módulo; Todo módulo criado deve ser registrado no arquivo:
- settings.py
em: INSTALLED_APPS

-> Criar URLs
- Dentro da pasta com o nome do módulo (home) criar o arquivo <urls.py> e inserir o código:

-> Registrar as URLs no arquivo principal
- <nome_do_projeto>/urls.py
- 
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
]
-
-> Criando uma view
- abrir o arquivo <views.py> e digitar o codigo:
-
from django.shortcuts import render
from django.http import HttpResponse

def post_list(request):
    return HttpResponse('Olá mundo!')
-

-> Rodar o servidor e ver se funcionou
python3 manage.py runserver