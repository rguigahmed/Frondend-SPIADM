import { Component, Prop ,State, Method } from "@stencil/core";
import { Enseignant } from '../../global/enseignant';


@Component({
  tag: "spi-allens",
  styleUrl: 'app-fetch.scss'
})
export class spi  {
    state = { show: false };
   
    showModal = () => {
        this.state={ show: true };
      };
      hideModal = () => {
        this.state={ show: false };
      };

    @State() enseignants :Enseignant[] = [] ;
    @Prop()
     name: string='/fetch/';
  
    apiRootUrl: string = 'http://api-dosispi.cleverapps.io/enseignants';
  
    @Method()
    load () {
    
      fetch(`${this.apiRootUrl}`).then(rsp => {
        return   rsp.json();
    
      }).then(data => {
        this.enseignants = data;
    
      }).catch((err) => {
        console.error('Could not load data', err);
      }); 
    }
  
    componentWillLoad() { 
      console.log('Component is being rendered');
  
      this.load();
    }
    componentDidLoad() {
      this.load();
  
      console.log('Component has been rendered');
    }
    handleClick() {
        
      }
    
  
  render() {
    return (
        
    

      
 <div class="marginn">

 
                
                 { this.enseignants.map((data:Enseignant) =>

                  
        
       
    <div class="pricing-table">
        <div class="pricing-plan">
          <div class="plan-header">

         
          <div class="field is-grouped is-pulled-right ">
            <p class="control">
        <stencil-route-link url={'/enseignant/detail/' + data.noEnseignant}>
        <button class="button is-info is-rounded is-focused is-tooltip-info tooltip" data-tooltip="Plus d'infos"> <i class="fas fa-info-circle"></i> </button>
         </stencil-route-link>
           </p>
           <p class="control">
           <stencil-route-link url={'/enseignant/delete/' + data.noEnseignant}>
          <button class="button is-danger is-rounded is-focused is-tooltip-danger tooltip" onClick={this.handleClick.bind(this)} data-tooltip="Supprimer Enseignant">   <i class="fas fa-trash-alt"></i> </button>
           </stencil-route-link>
           </p>
           </div>
          </div>
          <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency"> </span>{data.nom} {data.prenom}</span></div>
          <div class="plan-items">
            <div class="plan-item">{data.emailUbo}</div>
            <div class="plan-item">{data.mobile}</div>
            <div class="plan-item">{data.pays}</div>
            <div class="plan-item">{data.ville}</div>
          </div>
         
        </div>
      
      </div>
     
                  )
                 }
        
 </div>
    );
  }

  
}

  
