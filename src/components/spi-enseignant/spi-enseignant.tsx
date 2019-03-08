import { Component } from "@stencil/core";


@Component({
  tag: "spi-enseignant",
  styleUrl: "spi-enseignant.scss"
})
export class SpiEnseignant {
  render() {
    return (

        
      <div class="enseignant">
        <div class="container is-large has-text-centered">
          <app-fetch></app-fetch>
        </div>
      </div>
    );
  }
}
