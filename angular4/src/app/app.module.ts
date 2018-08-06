import { BrowserModule } from '@angular/platform-browser';
// Permite trabajar con todas las directivas ngModule
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// Nos permmitira trabajar con Two Way Data Binding
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// Importamos las variables de rutas
import { routing, appRoutingProviders } from './app.routing';

// Importa el componente navegador
import { ServicioComponent } from './servicio/servicio.component';
import { NavComponent } from './nav/nav.component';
import { EstanciaComponent } from './estancia/estancia.component';
import { ViajeComponent } from './viaje/viaje.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

// Submenus
import { EstanciaRequisitosComponent } from './estancia/requisitos/estanciaRequisitos.component';
import { EstanciaEmpresasComponent } from './estancia/empresas/estanciaEmpresas.component';
import { EstanciaFormatosComponent } from './estancia/formatos/estanciaFormatos.component';
import { NavLeftComponent } from './estancia/navLeft/navLeft.component';

import { NavLeftServicioComponent } from './servicio/navLeft/navLeft.component';

import { ServicioRequisitosComponent } from './servicio/requisitos/servicioRequisitos.component';
import { ServicioInstitucionComponent } from './servicio/institucion/servicioInstitucion.component';
import { ServicioFormatosComponent } from './servicio/formatos/servicioFormatos.component';

import { Viaje1Component } from './viaje/viaje1/viaje1.component';
import { NavLeftViajeComponent } from './viaje/navLeft/navLeft.component';

import { Viaje2Component } from './viaje/viaje2/viaje2.component';

@NgModule({
  // Declaramos nuestros componentes para que se puedan usar dentro de la aplicacion
  // En declarations van todas las directivas, pipes y componentes
  declarations: [
    // Componente principal de la aplicacion
      AppComponent,
      NavComponent,
      EstanciaComponent,
      ViajeComponent,
      ServicioComponent,
      HomeComponent,
      ContactoComponent,
      LoginComponent,
      EstanciaRequisitosComponent,
      EstanciaEmpresasComponent,
      EstanciaFormatosComponent,
      NavLeftComponent,
      NavLeftServicioComponent,
      ServicioRequisitosComponent,
      ServicioInstitucionComponent,
      ServicioFormatosComponent,
      NavLeftViajeComponent,
      Viaje1Component,
      Viaje2Component
  ],
  // Descarga mmodulos del framework y/u otros modulos con funcionalidades
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
