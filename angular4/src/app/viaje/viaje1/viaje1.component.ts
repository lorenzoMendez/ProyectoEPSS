import { Component } from '@angular/core';

@Component( {
      selector: 'viaje1',
      templateUrl: './viaje1.component.html',
      styleUrls: ['./viaje1.component.css']
} )


export class Viaje1Component {
      public nombre_componente = 'Pagina de Empresas de Estancias';
      public resultados:String = "Sin resultados";
}