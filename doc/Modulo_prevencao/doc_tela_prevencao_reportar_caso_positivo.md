# Documentação referente à funcionalidade "TELA REPORTAR CASO POSITIVO" do módulo "PREVENÇÃO A COVID-19"

## Descrição

Essa funcionalidade tem por objetivo capturar eventos de contaminação para reportar a comunidade de usuários que evitem aquela localização para prevenir sobre o risco de contágio .

## Detalhes técnicos

No evento de confirmação do formulário acionado pelo botão enviar do tipo submit serão capturados os dados informados:

- Data do teste
- Quantidade de dias de monitoramento da geolocalização

Caso selecione a opção cancelar, será direcionado para tela anterior

Segue o código fonte comentado

``` javascript
  $("#formulario").on(
    'submit',
    (e) => {
      e.preventDefault();
      alert("Caso positivo, reportado. Obrigado por contribuir")
      window.history.go(-1); 
      return false;
    }
  );

  $("#cancelar").on(
    "click",
    ()=>{
      window.history.go(-1); 
      return false;
    }
    )
```

## implementado

Foi implementado com Html , css, e JS para viabilizar a captura de informações para monitoramento da geolocalização do usuario de forma anônima, para que essa localização compartilhada sirva de alerta aos outros usuários nas proximidades, para evitar o contágio.

## Protótipo tela do menu prevenção - Reportar caso positivo

![Tela implementada.](/img/tela_principal_menu_prevencao_reportar_caso_positivo.png "Tela reportar caso positivo.") 