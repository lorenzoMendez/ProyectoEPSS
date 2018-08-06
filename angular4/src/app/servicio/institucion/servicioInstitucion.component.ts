import { Component } from '@angular/core';

@Component( {
      selector: 'servicio-componente-institucion',
      templateUrl: './servicioInstitucion.component.html',
      styleUrls: ['./servicioInstitucion.component.css']
} )


export class ServicioInstitucionComponent {
      public nombre_componente = 'Pagina de Empresas de Estancias';
      public resultados:String = "Sin resultados";
}