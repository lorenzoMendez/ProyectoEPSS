/**
 * Importa el modulo Component de '@angular/core' cuando se crea el proyecto.
 */
import { Component } from '@angular/core';

/**
 * DECORADOR
 * @Component le da una funcionalidad a la clase que se define como AppComponent
 */
@Component({
  // Selector de la vista
  selector: 'cuerpo',
  // Define una plantilla
  templateUrl: './app.component.html',
  // Define estilos
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public nombre_componente = "Pagina Principal";
}
