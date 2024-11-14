import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ChartDataResponse, EnergyDataService, EnergyMetrics } from '../energy-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  userId!: number ;
  userName: string = '';
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
      x: { display: true, title: { display: true, text: 'Time' } },
      y: { display: true, title: { display: true, text: 'kW' } }
    }
  };

  chartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      { label: 'Energy Generation', data: [400, 500, 600, 550], borderColor: 'blue',  },
      { label: 'Energy Consumption', data: [300, 350, 400, 380], borderColor: 'red', }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private energyDataService: EnergyDataService // Injecting the service
  ) {}

  ngOnInit() {
    // Fetch energy metrics data from the service
    // this.energyDataService.getEnergyConsumptionMetrics().subscribe(
    //   (data: EnergyMetrics) => {
    //     this.energyConsumptionMetrics = data; // Assign the fetched data
    //     console.log('Energy Consumption Metrics:', this.energyConsumptionMetrics); // For debugging
    //   },
    //   (error) => {
    //     console.error('Error fetching energy metrics:', error);
    //   }
    // );


    // this.energyDataService.getEnergyGenerationMetrics().subscribe(
    //   (data: EnergyMetrics) => {
    //     this.energyGenerationMetrics = data; // Assign the fetched data
    //     console.log('Energy Generation Metrics:', this.energyGenerationMetrics); // For debugging
    //   },
    //   (error) => {
    //     console.error('Error fetching energy metrics:', error);
    //   }
    // );

    const storedUserId = localStorage.getItem('userId');

    // If the value is found, parse it as a number
    if (storedUserId) {
      this.userId = Number(storedUserId); // Convert to number
    } else {
       // Set to null if not found
    }

    
    this.energyDataService.getUserData(this.userId).subscribe((data: any) => {
      console.log('user data : ', data);
      this.energyGenerationMetrics = data.energyGeneration;
      this.energyConsumptionMetrics = data.energyConsumption;
      this.chartData = data.chartData[0];
    })
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

    this.energyDataService.getUserData(this.userId).subscribe((data: any) => 

    {
      
    if(this.selectedPeriod == 'week'){
      this.chartData = {
        labels: data.chartData[0].labels,
        datasets: data.chartData[0].datasets.map((dataset: any) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor: dataset.borderColor,
          fill: false
        }))
      };
    }

    else if(this.selectedPeriod == 'month'){
      this.chartData = {
        labels: data.chartData[1].labels,
        datasets: data.chartData[1].datasets.map((dataset: any) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor: dataset.borderColor,
          fill: false
        }))
      };
    }

    else if(this.selectedPeriod == 'year'){
      this.chartData = {
        labels: data.chartData[2].labels,
        datasets: data.chartData[2].datasets.map((dataset: any) => ({
          label: dataset.label,
          data: dataset.data,
          borderColor: dataset.borderColor,
          fill: false
        }))
      };
    }


    }
    
    )



    // Fetch data based on selected period (week, month, or year)
    // this.energyDataService.getChartDataForPeriod(this.selectedPeriod).subscribe(
    //   (data: ChartDataResponse) => {
    //     // Map the API response to the format expected by the Chart.js
    //     this.chartData = {
    //       labels: data.labels,
    //       datasets: data.datasets.map(dataset => ({
    //         label: dataset.label,
    //         data: dataset.data,
    //         borderColor: dataset.borderColor,
    //         fill: false
    //       }))
    //     };
    //     console.log('Chart Data for period', this.selectedPeriod, ':', this.chartData); // For debugging
    //   },
    //   (error) => {
    //     console.error('Error fetching chart data:', error);
    //   }
    // );
  }
}
