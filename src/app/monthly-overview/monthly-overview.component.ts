import { Component, OnInit } from '@angular/core';
import { EnergyDataService } from '../energy-data.service';

@Component({
  selector: 'app-monthly-overview',
  templateUrl: './monthly-overview.component.html'
})
export class MonthlyOverviewComponent implements OnInit {
  ngOnInit(): void {

  }
  metrics = [
    { label: 'Energy Generation', value: 139.5 },
    { label: 'Energy Consumption', value: 86.8 },
    { label: 'Export to Grid', value: 52.7 }
  ];
  
  selectedParam: number | null = null;

  selectParam(index: number) {
    this.selectedParam = index;
  }
}
