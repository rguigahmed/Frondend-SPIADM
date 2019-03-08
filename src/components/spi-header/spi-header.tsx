import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-itemm">
              <strong>SPI-ADM</strong>
            </span>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbar-content"
            class="navbar-menu "
            ref={el => (this.menu = el)}
          >
            <div class="navbar-start" >
              <span class="navbar-item">
              <stencil-route-link url="/enseignant" activeClass="none">
                  <span class="">
                    <i class="fas fa-tools" />
                  </span>{" "}
                  <a class="button is-normal">Enseignant</a>
                </stencil-route-link>
                </span>
                <span class="navbar-item">
                <stencil-route-link url="/formation" activeClass="none">
                  <span class="">
                    <i class="fas fa-tools" />
                  </span>{" "}
                  <a class="button is-normal">Formation</a>
                </stencil-route-link>
                </span>
                <span class="navbar-item">
                <stencil-route-link url="/formation" activeClass="none">
                  <span class="">
                    <i class="fas fa-tools" />
                  </span>{" "}
                  <a class="button is-normal">Promotion</a>
                </stencil-route-link>
              
              </span>

            </div>

          </div>
        </div>
      </nav>
    );
  }
}
