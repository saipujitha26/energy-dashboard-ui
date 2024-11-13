import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnergyDataService {
  getMonthlyOverview() {
    return {
      energyConsumption: 500,
      energyGeneration: 450,
      minDailyUsage: 10,
      maxDailyUsage: 20
    };
  }

  getGraphData(period: string) {
    // Return mock data or implement actual API call
    return [];
  }
}
