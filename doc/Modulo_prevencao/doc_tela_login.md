# Documentação referente à funcionalidade "LOGIN/REGISTRAR" do módulo "PREVENÇÃO"

## Descrição

Essa funcionalidade tem por objetivo autenticar a entrada do usuário na aplicação 'Block Covid 'com base nos cadastros realizados.

Para entrar é necessário informar um email e senha que exista na lista de cadastrados, caso não tenha um email e senha para entrar é possível realizar o cadastro ou utilizar as credenciais
email: dev
senha: dev

## Detalhes técnicos

É realizada um ação no evento de click do elemento com o ID login.

A ação obtém a lista de usuários salva no cadastro, para percorrer e comparar com o email e senha informados no formulário, caso encontre é direcionado a página 'principal.html' que representa a área logada.

Quando não localiza o usuário, um alerta é emitido solicitando a revisão dos dados informados

>OBS: Utilize o email 'dev' e senha 'dev' , caso não tenha se registrado

- Para realizar um cadastro selecione o botão 'Realizar cadastro' e informe
  - Nome
  - Email
  - Senha

Segue o código fonte comentado

``` javascript
localStorage.removeItem('usuario')//sempre limpa o usuario do localStorage para proteger o login contra acesso direto a página principal

$(window).on('load', function () {    //no evento de carregamento da página
    $('#preloader .inner').fadeOut();   //elemento com a classe 'inner' dentro do elemento com id 'preloader', realizar efeito de fadeOut 
    $('#preloader').delay(350).fadeOut('slow'); //elemento com id 'preloader' esperar 350 millisegundos e realizar efeito de fadeOut
    $('body').delay(350).css({ 'overflow': 'visible' }); //seletor body esperar 350 millisegundos e mostrar o conteúdo
})

$("#login").on(           // Para o elemento com id login
    'click',                // No evento de click 
    () => {                 // faça o que tiver nessa função

        let logins = JSON.parse(
            localStorage.getItem('logins') // recuperar do localStorage o conteúdo que está salvo no item chamado 'logins'
        )                                // converte o valor de texto para objeto, utilizando JSON.parse

        if (logins == null)              // se não tiver itens na lista obtida 
            logins = []                    //cria uma lista vazia para nao dar erro

        let usuario = {                  // Criando um objeto com os dados informado em tela
            email: $("#email").val(),      // para o elemento com id email obter o valor que está na atributo VALUE
            password: $("#password").val() // para o elemento com id password obter o valor que está na atributo VALUE
        }

        // --------------------------------------------

        if (!usuario.email && !usuario.password) {    // Se qualquer campo estiver inválido 'Alerta o erro'   e cancela o login
            alert("Informe todos os dados")
            return;
        }

        let encontrado = false;                       // Variavel auxiliar utilizada como flag de localizada ou não

        logins.push(
            { // adiciona um usuario fake para facilitar os testes e na apresentação
                email: 'dev',
                password: 'dev',
                name: 'Administrador Dev2Blu'
            }
        )
        logins.forEach(login => {                     // o ForEach é um laço de repetição que percorre item por item e cria uma variável auxiliar que representa o item do laço

            if (login.email == usuario.email && login.password == usuario.password) {  // para cada item da lista recuperada é comparado o e-mail e senha
                encontrado = true                                                        // quando localizado atualiza a flag para verdadeiro
                localStorage.setItem("usuario", JSON.stringify(login))                   // Salvo no localStorage os dados do usuário encontrado que pertence a lista, dessa forma posso na próxima página esse usuário utilizando o localStorage.getItem
                window.location = "/src/principal.html"                                  // Direcionando para a página principal que representa a área logada

            }
        });

        if (!encontrado) {                                                            // Se percorreu a lista inteira e não encontrou a flag permanece como false
            alert("Usuário não localizado, verifique as informações e tente novamente") // Exibe a mensagem 'usuário não localizado ...'
        }

    }
);



$("#registrar").on(   //para elemento com id 'registrar'
  'click',            //no evento de click
  () => {             //fazer o que esta nessa função

    let logins = JSON.parse(localStorage.getItem('logins')) // obter a informação no localStore com a chave 'logins' e converter em objeto 
    if (logins == null)// se a lista de logins estiver vazia
      logins = []      //criar uma lista vazia para não dar erro

    let usuario = {                 //criar um objeto com as informações obtidas do formulário
      name: $("#name").val(),       //pega o valor do elemento com id 'name'
      email: $("#email-r").val(),     //pega o valor do elemento com id 'email'
      password: $("#password-r").val()//pega o valor do elemento com id 'password'
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


$("#cadastrar").click(function () {           //para o elemento com id 'cadastrar' no evento de click
    $("#first").fadeOut("fast", function () { //ocultar o elemento id 'first' que é a div do login com efeito de sumir de forma rapida
        $("#second").fadeIn("fast");          //exibir o elemento id 'second' que é a div do registrar com efeito de aparecer de forma rapida
    });
});

$("#logar").click(function () {               //para o elemento com id 'logar' no evento de click
    $("#second").fadeOut("fast", function () {//ocultar o elemento id 'second' que é a div do registrar com efeito de sumir de forma rapida
        $("#first").fadeIn("fast");           //exibir o elemento id 'first' que é a div do login com efeito de aparecer de forma rapida
    });
});
```

## implementado

Foi implementado com Html , css, e JS para viabilizar a execução de validação do acesso a aplicação . 

## Protótipo tela de login

| Web             |  Mobile |
:-------------------------:|:-------------------------:
![](/img/login.png) | ![](/img//mobile/login.png)


## Protótipo tela registrar

| Web             |  Mobile |
:-------------------------:|:-------------------------:
![](/img/registrar.png) | ![](/img//mobile/registrar.png)