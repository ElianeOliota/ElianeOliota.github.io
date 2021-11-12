##  Documentação referente à funcionalidade "Mapa de locais úteis" do módulo "Isolamento e Distânciamento social"

### Objetivo:
O objetivo da funcionalidade de Mapear locais úteis  seria mostrar ao usuário os estabelecimentos próximos a ele que realizam entrega em casa, assim, evitando que o usuário precise sair de casa para realizar compras nescessárias, propagando o distanciamento social e pagando um valor menor de entrega.

### Descrição:

Essa funcionalidade mostrará em um mapa as fármacias e supermercados próximos na região do usuário que realizam entrega. Será possível pesquisar por outras regiões através de um filtro mas a ideia principal é que seja próximo ao usuário para que o valor da entrega seja baixo.

Ao acessar pela primeira vez o site, o browser solicitará ao usuário a autorização para acessar sua localização (conforme tela 01). Caso não haja autorização, o usuário pode pesquisar manualmente.

Haverá um botão chamado “Meu local” que por padrão trará os locais de acordo com o GPS do usuário caso este tenha autorizado no dispositivo. Haverá também um input alfanumérico de pesquisa chamado “Digite um local” para que o usuário escolha uma região. Ao clicar no ícone de lupa a pesquisa será realizada. A pesquisa pelo botão de lupa visa melhorar a performance do aplicativo. 

### Detalhes técnicos:

A API que iremos utilizar nessa funcionalidade é a API do Google Maps onde mostra os estabelecimentos próximos a pesquisa realizada pelo usuário, mas nesse caso iremos inserir um filtro na categoria do tipo de atendimento realizado e filtrar apenas os estabelecimentos que tenham ENTREGA como tipo de atendimento.

A documentação da API do Google Maps pode ser consultada pelo link: https://developers.google.com/maps/documentation/javascript/overview.


### Protótipos

