import requests
import requests_cache
from bs4 import BeautifulSoup


def download_pagina():
    requests_cache.install_cache('pagina_principal')
    url = input("URL: ")
    response = requests.get(url)
    if response.status_code == 200:
        print("Download efetuado com sucesso")
        content = response.text
        # creating soup
        soup = BeautifulSoup(content, 'html.parser')
        listar_links(soup)
        return soup
    else:
        print("Algum problema ocorreu, tente novamente")


def listar_links(soup):
    all_links = soup.find_all('a')

    # getting first 10 links
    lista_links = []
    for i in range(len(all_links)):
        if len(lista_links) == 10:
            break
        else:
            lista_links.append(all_links[i].get('href'))

    counter = 0
    for link in lista_links:
        counter += 1
        print(f'{counter} - {link}')

    while True:
        print("\t\tSub menu")
        print("1 - Pesquisar dentro do link")
        print("2 - voltar")
        op = int(input(">>> "))
        if op == 2:
            break
        else:
            print("\t\tEscolher Link")
            nova_url = int(input("Numero do link: "))
            palavra_chave = input("Palavra chave para pesquisar: ")
            pesquisar_dentro_dos_links(palavra_chave, lista_links[nova_url - 1])


def pesquisar_dentro_dos_links(palavra_chave, url):
    requests_cache.install_cache('pagina_secundaria')

    response = requests.get(url)
    if response.status_code == 200:
        content = response.text
        # creating soup
        soup = BeautifulSoup(content, 'html.parser')
        texto = soup.get_text()
        extrair_palavras(texto, palavra_chave)

        # print(soup.get_text())
    else:
        print("Algum problema ocorreu, tente novamente")


def extrair_palavras(texto, palavra_chave):
    for palavra in texto.split():
        if palavra_chave in palavra:
            print(palavra)


def main():

    while True:
        print("-" * 50)
        print("\t\t\tMENU")
        print("\t1 - Download pagina")
        print("\t0 - SAIR")
        option = int(input("Opção: "))
        if option == 0:
            print("\t\t\tADEUS")
            break
        elif option == 1:
            soup = download_pagina()


main()
