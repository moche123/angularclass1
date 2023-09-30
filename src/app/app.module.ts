import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChildComponent } from './components/child/child.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './components/people/people.component';
import { PeoplePipe } from './pipes/people.pipe';

@NgModule({   //! @ => DECORADOR
  declarations: [ //! TODOS LOS COMPONENTES Y PIPES
    AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ChildComponent, PeopleComponent, PeoplePipe
  ],
  imports: [ //! MODULOS
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    ApiService
  ], //! DEPENDENCIAS (SERVICIOS Y DIRECTIVAS)
  bootstrap: [AppComponent] //! COMPONENTE QUE SE VA A MOSTRAR POR DEFECTO
})
export class AppModule { }
