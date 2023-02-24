import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent {
  linklist:any;
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService){}


  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      
      console.log(data);
      this.miPortfolio=data; 
    });
  
  }
}
