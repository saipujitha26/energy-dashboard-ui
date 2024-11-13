import { Component } from '@angular/core';
import { EnergyDataService } from '../energy-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  selectedPeriod : string= 'currentMonth';

  onPeriodChange(event: any) {
    this.selectedPeriod = event.target.value;
  }
}
