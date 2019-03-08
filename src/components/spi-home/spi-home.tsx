import { Component } from "@stencil/core";

@Component({
  tag: "spi-home",
  styleUrl: "spi-home.scss"
})
export class SpiHome {
  render() {
    return (
      <div class="spi-home">
        <div class="container is-large has-text-centered">
          <h1 class="title is-bold">Bienvenue sur l'interface du SPI !</h1>
          <h2 class="subtitle">J'ai choisi d'afficher juste les enseignants </h2>
        </div>
      </div>
      
    );
    
  }
  
}
