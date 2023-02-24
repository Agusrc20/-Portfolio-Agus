import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hardsoftskills',
  templateUrl: './hardsoftskills.component.html',
  styleUrls: ['./hardsoftskills.component.css']
})
export class HardsoftskillsComponent {
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
