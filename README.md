# Projeto web para o desafio Devs2Blu

<https://elianeoliota.github.io/>


## Objetivo

Projeto site/app (Block-Covid-19)

O projeto tem o objetivo de criar uma rede colaborativa que auxilie o distanciamento social.

Cada usuario poderá notificar se foi contaminado e durante o periodo de quarentena sua localização será monitorada de forma anonima.

Os outros usuarios receberão uma notificação com o nivel de risco que esta correndo nas proximidades.

O aplicativo poderá ser utilizado como passaporte imunização caso o usuario informe:

- Quando se vacinou
- Qual vacina tomou
- Onde tomou a vacina
## Tecnologia

Projeto (Block-Covid-19) poderá ser Site ou App

- Caso site: projeto do Site pode ser desenvolvido com HTML, CSS e JavaScrip. O Site terá um layout responsivo com caracteristicas mobile
- IDE - Visual Studio Code
- [Ver template HTML](https://elianeoliota.github.io/src/login.html)

- Caso App - projeto do App pode ser desenvolvido com JAVA, XLM . O aplicativo será desenvolvido para a plataforma Android
- IDE - Android Studio
- [Ver template APP](https://elianeoliota.github.io/doc/BlockCovid-19.mp4)

## Equipe - Parque Spitzkopf

Definir o papel de cada membro de acordo com o conhecimento individual

Número| Membro| Discord | Organização
------|---------|-------|------
01| André Felipe Schwanz|   André Felipe Schwanz#2261|  Equipe 01 - Prevenção (Banco de dados)
02| Benlove Anelus| 2beloved#9121|  Equipe 01 - Prevenção (Documentação e testes)
03| David Christian Machado|    DACRI#4138| Equipe 01 - Prevenção (Programação - login / registrar / cadastrar carteira de vacinação)
04| Eliane Henrique Oliota| Eliane Oliota#5537| Equipe 01 - Prevenção (Programação - página principal / reportar caso positivo / mapear riscos nas proximidades)
05| Maria Eduarda Krutzsch| maria#5190|  Equipe 02 - Tratamento
06| Lucas Panini Valcanaia| Lucas P. Valcanaia#1158|    Equipe 02 - Tratamento
07| Yuri Koller Borba|  lup#5227|    Equipe 02 - Tratamento
08| Douglas Lima da Luz|    douglaslima#5101|   Equipe 03 - Isolamento
09| Luan Lordello Guimarães Lima|   Luan Lordello#1751| Equipe 03 - Isolamento
10| Paula Adriana da Costa| paula_costa#2011|   Equipe 03 - Isolamento

## Funcionalidades

### Entrar

>Capturar email e senha para autenticar a entrada
>
>Guardar dados do usuário logado em sessão
>
>Alertar caso dê erro ao entrar
>
>[Ver detalhes técnicos](https://github.com/ElianeOliota/ElianeOliota.github.io/blob/main/doc/Modulo_prevencao/doc_tela_login.md)

### Registrar

>Capturar nome, email e senha para autenticar o cadastro
>
>Guardar dados do usuário logado em sessão
>
>Alertar caso encontre outro usuario com mesmo e-mail
>
>[Ver detalhes técnicos](https://github.com/ElianeOliota/ElianeOliota.github.io/blob/main/doc/Modulo_prevencao/doc_tela_registrar.md)

### Sair

>Retornar ao login
>
>Remover dados do usuário da sessão

### Página Principal

>Tela inicial que agrega as principais funções e resumo de informações importantes como:
>
>- Menu superior
>   - Prevenção
>   - Tratamento
>   - Isolamento
>   - Botão de sair
>
>- Menu lateral
>   - Inicio
>   - Reportar contaminação
>   - Cadastrar registro de vacina
>   - Ver mapa de exposição
>
>- Conteudo principal
>   - Números atualizados da pandemia
>   - Dicas simples de prevenção a covid
>   - Proteção contra acesso sem login
>
> [Ver detalhes técnicos](https://github.com/ElianeOliota/ElianeOliota.github.io/blob/main/doc/Modulo_prevencao/doc_tela_principal.md)

### A tela inicial está dividida em módulos no menu superior

## Prevenção
>
>- ### Cadastrar carteira de vacinação
>
>   - O usuário ao cadastrar a carteira de vacinação, poderá utilizar a aplicação como passaporte imunização
>   - [Ver detalhes técnicos](https://elianeoliota.github.io)
>
>- ### Reportar exposição
>
>   - Quando o usuário for contaminado, poderá informar para monitorar sua localização de forma anônima durante a quarentena
>   - [Ver detalhes técnicos](https://github.com/ElianeOliota/ElianeOliota.github.io/blob/main/doc/Modulo_prevencao/doc_tela_prevencao_reportar_caso_positivo.md)
>
>- ### Mapear risco atual
>
>   - Verificar se nas proximidades há risco de contágio com base nas localizações compartilhadas.
>   - [Ver detalhes técnicos](https://elianeoliota.github.io)

## Tratamento
>
>
>
## Isolamento
>
>- ### Mapeamento de aglomeração
>
>   - Um mapa com os eventos sociais que ocorrerão na região do usuário para indica-lo locais de potencial aglomeração de pessoas em torno de um ponto geográfico. 
> - [Ver detalhes técnicos](https://github.com/ElianeOliota/ElianeOliota.github.io/blob/main/doc/Modulo_isolamento/documentacao_eventos.md)
> 
>- ### Mapa de locais úteis
>
>   - Essa funcionalidade mostrará em um mapa as fármacias e supermercados cadastrados, próximos à região do usuário que realizam entregas e seguem os protocolos de enfrentamento à Covid-19. 
>- [Ver detalhes técnicos](https://github.com/ElianeOliota/ElianeOliota.github.io/blob/main/doc/Modulo_isolamento/documentacao_locais.md)