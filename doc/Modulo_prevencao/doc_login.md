# Documentação referente à funcionalidade "LOGIN" do módulo "PREVENÇÃO A COVID-19"

## Descrição

Essa funcionalidade tem por objetivo autenticar a entrada do usuário na aplicação 'Block Covid -19 'com base nos cadastros realizados na tela registrar.html .

## Detalhes técnicos

É realizada um ação no evento de click do elemento com o ID login.

A ação obtem a lista de usuários salva na tela 'registar.html' para percorrer e comparar com o email e senha informados no formulário, caso encontre é direcionado a página 'principal.html' que representa a área logada.

Quando não localiza o usuario, um alerta é emitido solicitando a revisão dos dados informados

Segue o código fonte comentado

``` javascript
$("#login").on(                          // Para o elemento com id login
      'click',                           // No evento de click 
      () => {                            // faça o que tiver nessa função
        let logins = JSON.parse(
          localStorage.getItem('logins') // recuperar do localStorage o conteúdo que está salvo no item chamado 'logins'
        )                                // converte o valor de texto para objeto, utilizando JSON.parse
        
        if (logins == null)              // se não tiver itens na lista obtida 
          logins = []                    // cria uma lista vazia para não dar ERRO

        let usuario = {                  // Criando um objeto com os dados informado em tela
          email: $("#email").val(),      // para o elemento com id email obter o valor que está na atributo VALUE
          password: $("#password").val() // para o elemento com id password obter o valor que está na atributo VALUE
        }
        window.location = "/src/principal.html"// Nesse momento o login está seguindo sem validação para facilitar o desenvolvimento do projeto
        return                                 // Encerrando a função por aqui para evitar a validação que está implementada nas linhas abaixo


       // --------------------------------------------

        if (!usuario.email && !usuario.password) {    // Se qualquer campo estiver inválido 'Alerta o erro'   e cancela o login
          alert("Informe todos os dados")
          return;
        }

        let encontrado = false;                       // Variavel auxiliar utilizada como flag de localizada ou não
        
        logins.forEach(login => {                     // o ForEach é um laço de repetição que percorre item por item e cria uma variável auxiliar que representa o item do laço

          if (login.email == usuario.email && login.password == usuario.password) {  // para cada item da lista recuperada é comparado o e-mail e senha
            encontrado = true                                                        // quando localizado atualiza a flag para verdadeiro
            localStorage.setItem("usuario", JSON.stringify(usuario))                 // Salvo no localStorage os dados do usuário encontrado, dessa forma posso na próxima página esse usuário utilizando o localStorage.getItem
            window.location = "/src/principal.html"                                  // Direcionando para a página principal que representa a área logada

          }
        });

        if (!encontrado) {                                                            // Se percorreu a lista inteira e não encontrou a flag permanece como false
          alert("Usuário não localizado, verifique as informações e tente novamente") // Exibe a mensagem 'usuário não localizado ...'
        }

      }
    );
```

## implementado

Foi implementado com Html , css, e JS para viabilizar a execução de validação do acesso a aplicação . 

## Protótipo

![This is a alt text.](/img/login.png "This is a sample image.")