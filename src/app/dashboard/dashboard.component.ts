import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ChartDataResponse, EnergyDataService, EnergyMetrics } from '../energy-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  userName: string = 'Sai Pujitha';
  selectedPeriod: string = 'month'; // Default to 'month'
  monthlyOverview: number = 139.5;
  message: string | null = null;

  // Energy Metrics
  energyGenerationMetrics: EnergyMetrics | null = null;
  energyConsumptionMetrics: EnergyMetrics | null = null;

  chartType: ChartType = 'line';
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: true, title: { display: true, text: 'Weeks' } },
      y: { display: true, title: { display: true, text: 'kW' } }
    }
  };

  chartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      { label: 'Energy Generation', data: [400, 500, 600, 550], borderColor: 'blue', fill: false },
      { label: 'Energy Consumption', data: [300, 350, 400, 380], borderColor: 'red', fill: false }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private energyDataService: EnergyDataService // Injecting the service
  ) {}

  ngOnInit() {
    // Fetch energy metrics data from the service
    this.energyDataService.getEnergyConsumptionMetrics().subscribe(
      (data: EnergyMetrics) => {
        this.energyConsumptionMetrics = data; // Assign the fetched data
        console.log('Energy Consumption Metrics:', this.energyConsumptionMetrics); // For debugging
      },
      (error) => {
        console.error('Error fetching energy metrics:', error);
      }
    );


    this.energyDataService.getEnergyGenerationMetrics().subscribe(
      (data: EnergyMetrics) => {
        this.energyGenerationMetrics = data; // Assign the fetched data
        console.log('Energy Generation Metrics:', this.energyGenerationMetrics); // For debugging
      },
      (error) => {
        console.error('Error fetching energy metrics:', error);
      }
    );

    this.route.data.subscribe(data => {
      this.message = data['message'] ? `${data['message']} clicked` : null;
    });
  }

  onDashboardClick() {
    this.router.navigateByUrl('/dashboard');
  }

  onProfileSettingsClick() {
    this.router.navigateByUrl('/profile-settings');
  }

  onLogoutClick() {
    this.router.navigateByUrl('/logout');
  }

  onPeriodChange(event: any) {
    this.selectedPeriod = event.target.value;
    this.updateChartData();
  }

  updateChartData() {
    // Fetch data based on selected period (week, month, or year)
    this.energyDataService.getChartDataForPeriod(this.selectedPeriod).subscribe(
      (data: ChartDataResponse) => {
        // Map the API response to the format expected by the Chart.js
        this.chartData = {
          labels: data.labels,
          datasets: data.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor,
            fill: false
          }))
        };
        console.log('Chart Data for period', this.selectedPeriod, ':', this.chartData); // For debugging
      },
      (error) => {
        console.error('Error fetching chart data:', error);
      }
    );
  }
}
