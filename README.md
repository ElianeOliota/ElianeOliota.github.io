# Projeto web para o desafio Devs2Blu

[Clique aqui para acessar o site](https://elianeoliota.github.io/)

| Web             |  Mobile |
:-------------------------:|:-------------------------:
![](/img/tour_web.gif) | ![](/img/tour_mobile.gif)

## Objetivo

> Projeto web (Block-Covid)
>
> - O projeto tem o objetivo de criar uma rede colaborativa que auxilie na prevenção e no distanciamento social, que consequentemente resultará na diminuição do contágio.
>
> - Cada usuário poderá notificar se foi contaminado e durante o período de quarentena sua localização será monitorada de forma anônima.
>
> - Os outros usuários receberão uma notificação com o nivel de risco que esta correndo nas proximidades.
>
> - A aplicação poderá ser utilizada como passaporte imunização caso o usuário informe:
>   - CPF
>   - Número do SUS
>
> - Com esses dados é possivel realizar uma busca na API do SUS para recuperar as informações necessários que serão utilizadas na geração da carteira digital de vacinação

## Tecnologia

- A aplicação foi desenvolvida com HTML, CSS e JavaScript. O Site tem um layout responsivo com caracteristicas mobile
- IDE - Visual Studio Code
- Armazenamento - Utilizando localStorage para a apresentação, mas o produto final utilizará MySql
  - O localStorage é um armazenamento local no navegador onde é possivel salvar e recuperar informações
- Backend - O produto final terá uma API publicada com Node.js
- [Clique aqui para acessar o site desenvolvido](https://elianeoliota.github.io)

## Equipe - Parque Spitzkopf

Definir o papel de cada membro de acordo com o conhecimento individual

Número| Membro| Discord | Organização
------|---------|-------|------
01| André Felipe Schwanz|   André Felipe Schwanz#2261|  Equipe 01 - Prevenção (Banco de dados)
02| Benlove Anelus| 2beloved#9121|  Equipe 01 - Prevenção (Documentação e testes)
03| David Christian Machado|    DACRI#4138| Equipe 01 - Prevenção (Programação - login / registrar / cadastrar carteira de vacinação)
04| Eliane Henrique Oliota| Eliane Oliota#5537| Equipe 01 - Prevenção (Programação - página principal / reportar caso positivo / mapear riscos nas proximidades)
05| Maria Eduarda Krutzsch| mariazinha#8145|  Equipe 02 - Tratamento
06| Lucas Panini Valcanaia| Lucas P. Valcanaia#1158|    Equipe 02 - Tratamento
07| Yuri Koller Borba|  lup#5227|    Equipe 02 - Tratamento
08| Douglas Lima da Luz|    douglaslima#5101|   Equipe 03 - Isolamento (Documentação)
09| Luan Lordello Guimarães Lima|   Luan Lordello#1751| Equipe 03 - Isolamento (Documentação - Montagem Apresentação)
10| Paula Adriana da Costa| paula_costa#2011|   Equipe 03 - Isolamento (Pesquisa, documentação e prototipagem)

## Funcionalidades

### Login

>Capturar email e senha para autenticar a entrada
>
>Guardar dados do usuário logado em sessão
>
>Alertar caso dê erro ao entrar
>
>[Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_login.md)

### Registrar

>Capturar nome, email e senha para autenticar o cadastro
>
>Guardar dados do usuário logado em sessão
>
>Alertar caso encontre outro usuário com mesmo e-mail
>
>[Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_login.md)

### Sair

>Retornar ao login
>
>Remover dados do usuário da sessão

### Página Principal

>Tela inicial agrega as principais funções e resumo de informações importantes como:
>
>- Menu superior:
>   - Prevenção
>     - Cadastrar carteira de vacina
>       - Gerar Carteira Digital de Vacinação
>     - Reportar caso positivo
>       - Formulário do Teste
>     - Mapear riscos nas proximidades
>   - Tratamento
>   - Isolamento
>   - Botão de sair
>
>- Conteúdo principal:
>   - Saudação ao usuário logado
>   - painel Brasil e Santa Catarina com os números atualizados da pandemia
>   - Dicas simples de prevenção à Covid-19
>   - Informações sobre  à Covid-19
>   - Proteção contra acesso sem login
>
> [Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_principal.md)

### A tela inicial está dividida em módulos no menu superior

## Prevenção
>
>- ### Cadastrar carteira de vacinação
>
>   - O usuário ao cadastrar a carteira de vacinação, poderá utilizar a aplicação como passaporte imunização
>
>- ### Reportar caso positivo
>
>   - Quando o usuário for contaminado, poderá informar para monitorar sua localização de forma anônima durante a quarentena
>
> [Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_prevencao_reportar_caso_positivo.md)
>
>- ### Mapear riscos nas proximidades
>
>   - Verificar se nas proximidades há risco de contágio com base nas localizações compartilhadas.
>
> [Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_prevencao_mapear_riscos.md)

## Tratamento
>
> - ### Quadro de informações
>
>   - Informa o usuário dos sintomas, possível tratamento e o que pode ajudar com a COVID-19, além de oferecer um teste para saber a gravidade dos sintomas.
>
> [Ver detalhes técnicos](/doc/Modulo_tratamento/documentacao_quadro.md)
>
> - ### Calculadora de sintomas
>
>   - Calcula os sintomas do usuário e oferece um resultado sobre a urgência em fazer um teste de covid.
>
> [Ver detalhes técnicos](/doc/Modulo_tratamento/documentacao_sintomas.md)

## Isolamento
>
>- ### Mapeamento de aglomeração
>
>   - Um mapa com os eventos sociais que ocorrerão na região do usuário para indicar-lhe locais de potencial aglomeração de pessoas em torno de um ponto geográfico.
>
> [Ver detalhes técnicos](/doc/Modulo_isolamento/documentacao_eventos.md)
>
>- ### Mapa de locais úteis
>
>   - Essa funcionalidade mostrará em um mapa as farmácias e supermercados cadastrados, próximos à região do usuário que realizam entregas e seguem os protocolos de enfrentamento à Covid-19.
>
> [Ver detalhes técnicos](/doc/Modulo_isolamento/documentacao_locais.md)
