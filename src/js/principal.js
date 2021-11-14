$('#bem_vindo').text('Bem vindo(a), ' + usuario.name);

$.ajax(           //requisição AJAX com JQUERY
  {               //configurando objeto que será utilizado para a chamada de API
    type: 'get',  //tipo de conexão GET  (utilizado para obter dados sem realizar alterações no lado servidor)
    url: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalGeralApi',// url onde é esperado obter informações
    success: (response) => {      //configurando um evento que aguarda a conexão no caso de sucesso, para fazer o que estiver aqui
      console.log(response);      //logar no console o retorno ajuda a saber o modelo de dados retornado

      //com base no retorno JSON o valor no elemento com id 'confirmados' e converto o valor para uma mascara numerica
      $("#confirmados").text(formatarBigDecimal(response.confirmados.total))

      //com base no retorno JSON o valor no elemento com id 'obitos' e converto o valor para uma mascara numerica
      $("#obitos").text(formatarBigDecimal(response.obitos.total))

      // com base no retorno do JSON o valor no elemento com ID 'atualizado' 
      let atualizado = new Date(response.dt_updated)
      $("#atualizado").text('Atualizado em: ' + atualizado.toLocaleDateString() + ' -  ' + atualizado.getHours() + ":" + atualizado.getMinutes())

    },
    error: (erro) => { //configurando um evento que aguarda a conexão no caso de sucesso, para fazer o que estiver aqui
      console.error(); (erro); //logar no console o retorno ajuda a saber o modelo de dados retornado
    }
  }
);

$.ajax(               //requisição AJAX com JQUERY
  {                   //configurando objeto que será utilizado para a chamada de API
    url: 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstado', // url onde é esperado obter informações
    type: 'get',      //tipo de conexão GET  (utilizado para obter dados sem realizar alterações no lado servidor)
    success:          //configurando um evento que aguarda a conexão no caso de sucesso, para fazer o que estiver aqui
      (response) => {
        console.log(response)       //logar no console o retorno ajuda a saber o modelo de dados retornado
        console.log(response[6].casosAcumulado);
        $('#confirmados-sc').text(formatarBigDecimal(response[6].casosAcumulado.toString()))
        $('#obitos-sc').text(formatarBigDecimal(response[6].obitosAcumulado.toString()))

      },
    error:
      (erro) => {
        console.warn(erro)
      }

  }
)

function formatarBigDecimal(valor) {              //função utilitária que recebe um numero e formata com caracteres numericos como (,)
  return valor.replace(/(.)(?=(\d{3})+$)/g, '$1.')//regex (expressão regular que faz essa formatação)
  //para cada grupo de 3 caracteres será inserido (.)
}