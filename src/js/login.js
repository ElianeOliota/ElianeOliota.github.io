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




$("#signup").click(function () {
    $("#first").fadeOut("fast", function () {
        $("#second").fadeIn("fast");
    });
});

$("#signin").click(function () {
    $("#second").fadeOut("fast", function () {
        $("#first").fadeIn("fast");
    });
});


 


