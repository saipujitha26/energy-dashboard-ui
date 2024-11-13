import { Component } from '@angular/core';

@Component({
  selector: 'app-energy-graph',
  templateUrl: './energy-graph.component.html',
  styleUrls: ['./energy-graph.component.css']
})
export class EnergyGraphComponent {
  period: string = 'Current Week'; 
}
