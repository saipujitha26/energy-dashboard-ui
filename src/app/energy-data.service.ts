import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the interface for the energy metrics
export interface EnergyMetrics {
  energy: number;
  minUsage: number;
  maxUsage: number;
}

// Define interfaces for the energy metrics
export interface ChartDataResponse {
  labels: string[];
  datasets: { label: string, data: number[], borderColor: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class EnergyDataService {

  private energyConsumptionUrl = 'http://localhost:8080/api/chart/energy-metrics/consumption';

  private energyGenerationUrl = 'http://localhost:8080/api/chart/energy-metrics/generation';

  private chartdataUrl = 'http://localhost:8080/api/chart/chart-data/';

  constructor(private http: HttpClient) {}

  // Method to fetch the energy metrics from the backend
  getEnergyGenerationMetrics(): Observable<EnergyMetrics> {
    return this.http.get<EnergyMetrics>(this.energyGenerationUrl);
  }

  getEnergyConsumptionMetrics(): Observable<EnergyMetrics> {
    return this.http.get<EnergyMetrics>(this.energyConsumptionUrl);
  }

  getChartDataForPeriod(period: string): Observable<ChartDataResponse> {
    const url = `${this.chartdataUrl}${period}`;
    return this.http.get<ChartDataResponse>(url);
  }

  getUserData(userId: number): any {
    const userDataUrl = `http://localhost:8080/api/user/${userId}`;
    return this.http.get<any>(userDataUrl);
  }
}
