import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { EnergyDataService } from '../energy-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  // selectedPeriod : string= 'currentMonth';

  // energyData = [
  //   { date: '2024-11-01', energyConsumption: 15, energyGeneration: 10 },
  //   { date: '2024-11-02', energyConsumption: 20, energyGeneration: 15 },
  //   { date: '2024-11-03', energyConsumption: 25, energyGeneration: 20 },
 
  // ];

  // onPeriodChange(event: any) {
  //   this.selectedPeriod = event.target.value;
  // }

  userName: string = 'Naresh Kamble';
  selectedPeriod: string = 'month'; // Default to 'month'
  monthlyOverview: number = 139.5;

  message: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.message = data['message'] ? `${data['message']} clicked` : null;
    });
  }
  onDashboardClick(){
    this.router.navigateByUrl('/dashboard');
  }

  onProfileSettingsClick() {
    
    this.router.navigateByUrl('/profile-settings');
    // You could also use routing if you want to display another page
  }

  onLogoutClick() {
  
    this.router.navigateByUrl('/logout')
    // You could redirect the user to a login page or clear session here
  }


  // Mock data for energy metrics
  energyMetrics = {
    generation: 9574.4,
    consumption: 5661.6,
    minUsage: 2.7,
    maxUsage: 4.6
  };

  chartType: ChartType = 'line';
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: true, title: { display: true, text: 'Weeks' } },
      y: { display: true, title: { display: true, text: 'kW' } }
    }
  };

  // Initial chart data for the current month
  chartData: ChartData<'line'> = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      { label: 'Energy Generation', data: [400, 500, 600, 550], borderColor: 'blue', fill: false },
      { label: 'Energy Consumption', data: [300, 350, 400, 380], borderColor: 'red', fill: false }
    ]
  };

  // Handle dropdown change
  onPeriodChange(event: any) {
    this.selectedPeriod = event.target.value;
    this.updateChartData();
  }

  // Method to update chart data based on selected period
  updateChartData() {
    switch (this.selectedPeriod) {
      case 'month':
        // Mock data for current month
        this.chartData = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            { label: 'Energy Generation', data: [400, 500, 600, 550], borderColor: 'blue', fill: false },
            { label: 'Energy Consumption', data: [300, 350, 400, 380], borderColor: 'red', fill: false }
          ]
        };
        break;

      case 'week':
        // Mock data for current week
        this.chartData = {
          labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
          datasets: [
            { label: 'Energy Generation', data: [70, 80, 60, 75, 85, 90, 95], borderColor: 'blue', fill: false },
            { label: 'Energy Consumption', data: [50, 60, 55, 60, 70, 75, 80], borderColor: 'red', fill: false }
          ]
        };
        break;

      case 'year':
        // Mock data for current year
        this.chartData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            { label: 'Energy Generation', data: [300, 280, 320, 400, 450, 470, 480, 460, 450, 440, 420, 410], borderColor: 'blue', fill: false },
            { label: 'Energy Consumption', data: [200, 210, 230, 280, 300, 320, 330, 310, 305, 290, 280, 270], borderColor: 'red', fill: false }
          ]
        };
        break;
    }
  }
}
