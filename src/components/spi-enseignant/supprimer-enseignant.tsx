import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'supprimer-enseignant',
    styleUrl: 'app-fetch.scss'
})
export class SupprimEnseignant {
    @Prop() match: MatchResults;
    
        deleteData() {
            fetch("http://api-dosispi.cleverapps.io/enseignants"+this.match.params.noEnseignant, {
                method: "DELETE",
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json"
                }
              })
        .then(response => response.json());
      }

    render() {
        return (

            <div class="columns is-mobile is-centered">
           
 <article class="message is-success ">
  <div class="message-header is-mobile is-centered">
    <p></p>
   
  </div>
  <div class="message-body">
  L'Enseignant avec le numéro :  <strong>{this.match.params.noEnseignant}</strong>{this.deleteData()} a été suprimé.
  </div>
</article>
           </div>
        );
    }
}