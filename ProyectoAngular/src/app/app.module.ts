import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { HardsoftskillsComponent } from './components/hardsoftskills/hardsoftskills.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { Error404Component } from './components/error404/error404.component';

import { RouterModule, Routes } from '@angular/router';



const routes: Routes= [
  
  {path: 'educacion', component:EducacionComponent},
  
  {path: 'experiencia', component:ExperienciaComponent},
  
  {path: 'skills', component:HardsoftskillsComponent},

  {path: 'proyectos', component:ProyectosComponent},
  
  {path: 'login', component:LoginComponent},

  {path: 'acerca-de-mi', component:AcercaDeMiComponent},

  {path: 'inicio', component:HomeComponent},
  
  {path: '', component:HomeComponent, pathMatch: 'full'},

  {path: '**', component:Error404Component},


];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FondoComponent,
    AcercaDeMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HomeComponent,
    HardsoftskillsComponent,
    FooterComponent,
    LoginComponent,
    NavegacionComponent,
    Error404Component,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    

],
  exports:[],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
