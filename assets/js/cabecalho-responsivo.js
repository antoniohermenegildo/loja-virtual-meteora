class BarraNavegacaoResponsiva{
  constructor(iconeHamburguer, menuNavegacao, linksMenu){
    this.iconeHamburguer = document.querySelector(iconeHamburguer);
    this.menuNavegacao = document.querySelector(menuNavegacao);
    this.linksMenu = document.querySelectorAll(linksMenu);
    this.classeAtiva = "ativa";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.menuNavegacao.classList.toggle(this.classeAtiva);
    this.iconeHamburguer.classList.toggle(this.classeAtiva);
  }

  addEventoClick(){
    this.iconeHamburguer.addEventListener("click", this.handleClick);
  }
  
  iniciar() {
    if (this.iconeHamburguer) {
      this.addEventoClick();
    }
    return this;
  }
}

const barraNavegacaoResponsiva = new BarraNavegacaoResponsiva(
  ".cabecalho__hamburguer",
  ".cabecalho__navegacao-menu",
  ".cabecalho__navegacao-menu-item"
);

barraNavegacaoResponsiva.iniciar();