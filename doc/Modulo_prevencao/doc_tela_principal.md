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
  $.ajax(
    {
      type: 'get',
      url: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi',
      success: (response) => {
        console.log(response);

        $("#confirmados").text(formatarBigDecimal(response.confirmados.total))
        $("#recuperados").text(formatarBigDecimal(response.confirmados.recuperados))
        $("#obitos").text(formatarBigDecimal(response.obitos.total))

      },
      error: () => { 
      }
    } 
  );

  function formatarBigDecimal(valor) {
    return valor.replace(/(.)(?=(\d{3})+$)/g, '$1,')
  }
```

## implementado

Foi implementado com Html , css, e JS(Jquery e Ajax) para viabilizar o consumo de API através de requisição para obter dados reais sobre a covid de fonte confiavel.

## Protótipo tela principal

![Tela implementada.](/img/tela_principal_menu_prevencao_reportar_caso_positivo.png "Tela principal.")

## Ações implementadas no menu

![Tela implementada.](/img/tela_principal_menu.png "Tela principal - menu.")
