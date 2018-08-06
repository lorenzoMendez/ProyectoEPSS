import { Component } from '@angular/core';

@Component( {
      selector: 'componente-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
} )


export class HomeComponent {
      public nombre_componente = 'Pagina Home';

      public nombre_usuario;
      public id_usuario;
      public sesion_usuario;
}