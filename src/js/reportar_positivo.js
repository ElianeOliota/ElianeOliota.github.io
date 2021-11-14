$("#formulario").on(         //para o elemento com ID 'formulario'
    'submit',                  //no evento de submit disparado pelo button com type submit
    (e) => {                   //faça o que estiver nessa função (e) é o parametro de evento
        e.preventDefault();      //removendo caracteristica padrão do submit que é dar um refresh em tela
        alert("Caso positivo, reportado. Obrigado por contribuir") // mensagem em tela para o usuário
        window.location="/src/principal.html";   //comando para voltar a página principal
        return false;
    }
);

$("#cancelar").on(          //para o elemento com ID 'cancelar'
    "click",                  //no evento de click
    () => {                     //faça o que estiver nessa função
        window.location="/src/principal.html";   //comando para voltar a página principal
    }
)