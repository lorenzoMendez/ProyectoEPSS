import { Component } from '@angular/core';

@Component( {
      selector: 'estancia-componente-empresas',
      templateUrl: './estanciaEmpresas.component.html',
      styleUrls: ['./estanciaEmpresas.component.css']
} )


export class EstanciaEmpresasComponent {
      public nombre_componente = 'Pagina de Empresas de Estancias';
      
      public resultados:String = "Sin resultados";
}