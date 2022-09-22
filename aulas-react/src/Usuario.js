function Usuario() {

    let onClickHandler = function() {   // podes usar "let" em vez de "var"
        alert("Alguém clicou no botão!");
    }
    return (
        <button onClick={onClickHandler}>Click me</button>
    );
}
export default Usuario;