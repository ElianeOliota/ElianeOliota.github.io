# Documentação referente à funcionalidade "TELA PRINCIPAL" do módulo "PREVENÇÃO A COVID-19"

## Descrição

Essa funcionalidade tem por objetivo exibir informações importantes referente ao cenário atual da pandemia como .

- Menu superior com módulos
  - Prevenção
  - Tratamento
  - Isolamento
- Painel Coronavírus - Brasil
- Dicas de prevenção
- Sair (deslogar o usuário)

## Detalhes técnicos

A tela apresenta o (Painel Coronavírus - Brasil) com os números atualizados automaticamente, pois utilizamos a API (https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi). Fonte : https://covid.saude.gov.br/

Segue o código fonte comentado

``` javascript
  $.ajax(           //requisição AJAX com JQUERY
    {               //configurando objeto que será utilizado para a chamada de API
      type: 'get',  //tipo de conexão GET  (utilizado para obter dados sem realizar alterações no lado servidor)
      url: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi',// url onde é esperado obter informações
      success: (response) => {      //configurando um evento que aguarda a conexão no caso de sucesso, para fazer o que estiver aqui
        console.log(response);      //logar no console o retorno ajuda a saber o modelo de dados retornado

        //com base no retorno jogo o valor no elemento com id 'confirmados' e converto o valor para uma mascara numerica
        $("#confirmados").text(formatarBigDecimal(response.confirmados.total))      
        
        //com base no retorno jogo o valor no elemento com id 'recuperados' e converto o valor para uma mascara numerica
        $("#recuperados").text(formatarBigDecimal(response.confirmados.recuperados))
        
        //com base no retorno jogo o valor no elemento com id 'obitos' e converto o valor para uma mascara numerica
        $("#obitos").text(formatarBigDecimal(response.obitos.total))

      },
      error: (erro) => { //configurando um evento que aguarda a conexão no caso de sucesso, para fazer o que estiver aqui
        console.error();(erro); //logar no console o retorno ajuda a saber o modelo de dados retornado
      }
    } 
  );

  function formatarBigDecimal(valor) {              //função utilitária que recebe um numero e formata com caracteres numericos como (,)
    return valor.replace(/(.)(?=(\d{3})+$)/g, '$1,')//regex (expressão regular que faz essa formatação)
    //para cada grupo de 3 caracteres será inserido (,)
  }
```

## implementado

Foi implementado com Html , css, e JS(Jquery e Ajax) para viabilizar o consumo de API através de requisição para obter dados reais sobre a covid de fonte confiavel.

## Protótipo tela principal

![Tela implementada.](/img/tela_principal_menu_prevencao_reportar_caso_positivo.png "Tela principal.")

## Ações implementadas no menu

![Tela implementada.](/img/tela_principal_menu.png "Tela principal - menu.")
