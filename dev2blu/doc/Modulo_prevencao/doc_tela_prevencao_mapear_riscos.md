# Documentação referente à funcionalidade "TELA RISCO NAS PROXIMIDADES" do módulo "PREVENÇÃO"

## Descrição

Essa funcionalidade tem por objetivo exibir no mapa com base nos casos positivos reportados a quantidade de contaminados nas proximidades .

## Detalhes técnicos

Os dados cadastrados serão utilizados para gerar pins no mapa com base na geolocalização do usuário logado:

Os dados fornecidos no formulário de cadastramento seriam armazenados em um banco de dados (MySQL).

Para inicialização e centralização do mapa será utilizada a API Google Maps (consultada pelo link: https://developers.google.com/maps/documentation/javascript/overview) passando as informações do GPS recebidas pelo browser.


## Protótipo tela do menu prevenção - Mapear riscos nas proximidades

| Web             |  Mobile |
:-------------------------:|:-------------------------:
![](/img/tela_principal_menu_prevencao_mapear_risco.png) | ![](/img//mobile/mapear_risco.png)
