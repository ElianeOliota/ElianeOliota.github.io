# Documentação referente à funcionalidade "TELA REPORTAR CASO POSITIVO" do módulo "PREVENÇÃO"

## Descrição

Essa funcionalidade tem por objetivo capturar eventos de contaminação para reportar a comunidade de usuários que evitem aquela localização para prevenir sobre o risco de contágio .

## Detalhes técnicos

No evento de confirmação do formulário acionado pelo botão enviar do tipo submit serão capturados os dados informados:

- Data do teste
- Quantidade de dias de monitoramento da geolocalização

Caso selecione a opção cancelar, será direcionado para tela anterior

Segue o código fonte comentado

``` javascript
  $("#formulario").on(         //para o elemento com ID 'formulario'
    'submit',                  //no evento de submit disparado pelo button com type submit
    (e) => {                   //faça o que estiver nessa função (e) é o parametro de evento
      e.preventDefault();      //removendo caracteristica padrão do submit que é dar um refresh em tela
      alert("Caso positivo, reportado. Obrigado por contribuir") // mensagem em tela para o usuário
      window.history.go(-1);   //comando para voltar a página anterior
      return false;            
    }
  );

  $("#cancelar").on(          //para o elemento com ID 'cancelar'
    "click",                  //no evento de click
    ()=>{                     //faça o que estiver nessa função
      window.history.go(-1);  //retornar a página anterior
      return false;
    }
    )
```

## implementado

Foi implementado com Html , css, e JS para viabilizar a captura de informações para monitoramento da geolocalização do usuário de forma anônima, para que essa localização compartilhada sirva de alerta aos outros usuários nas proximidades, para evitar o contágio.

## Protótipo tela do menu prevenção - Reportar caso positivo

| Web             |  Mobile |
:-------------------------:|:-------------------------:
![](/img/tela_principal_menu_prevencao_reportar_caso_positivo.png) | ![](/img//mobile/reportar_caso_positivo.png)
