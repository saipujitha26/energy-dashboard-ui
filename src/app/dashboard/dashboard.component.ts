import { Component } from '@angular/core';
import { EnergyDataService } from '../energy-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  selectedPeriod : string= 'currentMonth';

  energyData = [
    { date: '2024-11-01', energyConsumption: 15, energyGeneration: 10 },
    { date: '2024-11-02', energyConsumption: 20, energyGeneration: 15 },
    { date: '2024-11-03', energyConsumption: 25, energyGeneration: 20 },
    // Add more data here
  ];

  onPeriodChange(event: any) {
    this.selectedPeriod = event.target.value;
  }
}
