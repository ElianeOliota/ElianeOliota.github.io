
$("nav").html(
    `
    <a class="navbar-brand" href="/src/principal.html">
    <!-- <img src="/img/mask.png" width="30" height="30" class="d-inline-block align-top" alt=""> -->
    <img src="/img/logo_login.png" width="200" height="60">

  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/src/principal.html">Home <span class="sr-only"></span></a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="prevencao" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Prevenção
        </a>
        <div class="dropdown-menu" aria-labelledby="prevencao">
          <a class="dropdown-item" href="/src/cadastrar_vacina.html">
            <img src="/img/vacina.png" class="rounded-circle" width="32px">
            Cadastrar carteira de vacina</a>
          <a class="dropdown-item" href="/src/reportar_positivo.html">
            <img src="/img/reportar_positivo.png" class="rounded-circle" width="32px">
            Reportar caso positivo</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/src/mapear_risco.html">

            <img src="/img/locations.png" class="rounded-circle" width="32px">
            Mapear riscos nas proximidades</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="tratamento" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Tratamento
        </a>
        <div class="dropdown-menu" aria-labelledby="tratamento">
          <a class="dropdown-item" href="#">Em desenvolvimento...</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="isolamento" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Isolamento
        </a>
        <div class="dropdown-menu" aria-labelledby="isolamento">
          <a class="dropdown-item" href="#">Em desenvolvimento...</a>
        </div>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a class="nav-link text-dark" href="/src/login.html">Sair</a>
    </form>
  </div>
    `
)