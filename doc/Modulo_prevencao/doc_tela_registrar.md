# Documentação referente à funcionalidade "REGISTRAR" do módulo "PREVENÇÃO A COVID-19"

## Descrição

Essa funcionalidade tem por objetivo cadastrar um usuário na aplicação 'Block Covid' que será validado na tela login.html e para proteger o acesso direto as páginas ao não efetuar o login .

## Detalhes técnicos

É realizada um ação no evento de click do elemento com o ID registrar.

A ação obtem a lista salva no localStorage do navegador para percorrer e comparar com o email informado no formulário para validar cadastro repetidos, caso encontre é informado que já existe um usuário com esse email

Caso não encontre o usuario é salvo na lista e o mesmo usuario é salvo em sessão

O usuário é direcionado a página 'principal.html' que representa a área logada, onde o usuário salvo em sessão será utilizado.

Segue o código fonte comentado

``` javascript
    localStorage.removeItem('usuario')//sempre limpa o usuario do localStorage para proteger o login contra acesso direto a página principal


    $(window).on('load', function () {    //no evento de carregamento da página
      $('#preloader .inner').fadeOut();   //elemento com a classe 'inner' dentro do elemento com id 'preloader', realizar efeito de fadeOut 
      $('#preloader').delay(350).fadeOut('slow'); //elemento com id 'preloader' esperar 350 millisegundos e realizar efeito de fadeOut
      $('body').delay(350).css({ 'overflow': 'visible' }); //seletor body esperar 350 millisegundos e mostrar o conteúdo
    })

    $("#registrar").on(   //para elemento com id 'registrar'
      'click',            //no evento de click
      () => {             //fazer o que esta nessa função

        let logins = JSON.parse(localStorage.getItem('logins')) // obter a informação no localStore com a chave 'logins' e converter em objeto 
        if (logins == null)// se a lista de logins estiver vazia
          logins = []      //criar uma lista vazia para não dar erro

        let usuario = {                 //criar um objeto com as informações obtidas do formulário
          name: $("#name").val(),       //pega o valor do elemento com id 'name'
          email: $("#email").val(),     //pega o valor do elemento com id 'email'
          password: $("#password").val()//pega o valor do elemento com id 'password'
        }

        if (!usuario.email && !usuario.password) {  //valida as informações do usuário a ser cadastrado
          alert("Informe todos os dados")           //se faltou informar qualquer dado, reportar erro em tela
          return;                                   //não deixa realizar o cadastro
        }


        let encontrado = false;               //variavel de controle utilizada como flag para usuário já existe ou não na lista

        logins.forEach(login => {               //o foreach é um laço de repetição que percorre a lista e cria uma variavel que representa o item do laço no momento
          if (login.email == usuario.email) {   // comparando se o email do novo usuário já pertence a alguem na lista
            encontrado = true                   //atualiza flag para encontrado
            alert("Usuário já existe com este email, altere as informações e tente novamente")  //avisa em tela que não pode ter outro usuário com o mesmo email
          }
        });

        if (!encontrado) {  //se não encontrou alguem na lista com o mesmo email
          logins.push(usuario)                                      // adiciona o usuario na lista
          localStorage.setItem("usuario", JSON.stringify(usuario))  //salva o usuario convertido em texto no local storage para ser recuperado depois na proxima tela
          localStorage.setItem("logins", JSON.stringify(logins))    //salva a lista convertida em texto no local storage para ser utilizado depois no login ou aqui mesmo em registrar para validar duplicidades
          window.location = "/src/principal.html"                   //direciona a navegação para a página principal

        } 
      }
    );
```

## implementado

Foi implementado com Html , css, e JS para viabilizar a execução de validação do acesso a duplicado e para salvar e manter a lista de usuários no localStorage.

## Protótipo tela de login

![Tela implementada.](/img/registrar.png "Tela de registrar.")

## Protótipo tela principal

![Tela implementada.](/img/principal.png "Tela principal.")
