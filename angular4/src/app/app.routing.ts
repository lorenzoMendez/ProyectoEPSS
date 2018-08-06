// Agregamos los siguientes modulos para trabajar con el routing
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos los componentes que vamos a usar
import { LoginComponent } from './login/login.component';
import { ServicioComponent } from './servicio/servicio.component';
import { HomeComponent } from './home/home.component';
import { EstanciaComponent } from './estancia/estancia.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ContactoComponent } from './contacto/contacto.component';

// Submenus
import { EstanciaRequisitosComponent } from './estancia/requisitos/estanciaRequisitos.component';
import { EstanciaEmpresasComponent } from './estancia/empresas/estanciaEmpresas.component';
import { EstanciaFormatosComponent } from './estancia/formatos/estanciaFormatos.component';

import { ServicioRequisitosComponent } from './servicio/requisitos/servicioRequisitos.component';
import { ServicioInstitucionComponent } from './servicio/institucion/servicioInstitucion.component';
import { ServicioFormatosComponent } from './servicio/formatos/servicioFormatos.component';

import { Viaje1Component } from './viaje/viaje1/viaje1.component';
import { Viaje2Component } from './viaje/viaje2/viaje2.component';

const appRoutes: Routes = [
      // Pagina de Login es primero
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'estancia', component: EstanciaComponent },
            { path: 'estancia/requisitos', component: EstanciaRequisitosComponent },
            { path: 'estancia/empresas', component: EstanciaEmpresasComponent },
            { path: 'estancia/formatos', component: EstanciaFormatosComponent },
      { path: 'servicio', component: ServicioComponent },
            { path: 'servicio/requisitos', component: ServicioRequisitosComponent },
            { path: 'servicio/institucion', component: ServicioInstitucionComponent },
            { path: 'servicio/formatos', component: ServicioFormatosComponent },
      { path: 'viaje', component: ViajeComponent },
            { path:'viaje/viaje-xideral', component: Viaje1Component },
            { path:'viaje/viaje-pemex', component: Viaje2Component },
      { path: 'contacto', component: ContactoComponent }
];

// Procedimiento que necesita Angular para poder cargar las Rutas
export const appRoutingProviders: any[] = [];
// Que cargue todas las rutas a la aplicacion que definimos
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );