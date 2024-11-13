import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-energy-graph',
  templateUrl: './energy-graph.component.html',
  styleUrls: ['./energy-graph.component.css']
})
export class EnergyGraphComponent {

  chartType: ChartType = 'line';  // Set chart type as 'line'

  // Data for both energy consumption and energy generation
  chartData = {
    labels: ['January', 'February', 'March', 'April','May','June', 'July', 'August','September','October','November', 'December'],  // x-axis labels (e.g., months)
    datasets: [
      {
        data: [65, 59, 80, 81,98,34,66,12,70,67,34,56],  // Energy consumption data
        label: 'Energy Consumption (kWh)',  // Label for energy consumption line
        fill: false,  // No fill under the line
        borderColor: 'blue',  // Line color for energy consumption
        tension: 0.1  // Smoothness of the line
      },
      {
        data: [45, 60, 70, 55,87,34,98,34,67,90,87,99],  // Energy generation data
        label: 'Energy Generation (kWh)',  // Label for energy generation line
        fill: false,  // No fill under the line
        borderColor: 'red',  // Line color for energy generation
        tension: 0.1  // Smoothness of the line
      }
    ]
  };

  chartOptions: ChartOptions = {
    responsive: false,  // Disable responsiveness to set explicit width and height
    maintainAspectRatio: false,  // Allow the aspect ratio to be adjusted

    scales: {
      x: {
        beginAtZero: true,
        title: { text: 'Months', display: true }
      },
      y: {
        beginAtZero: true,
        title: { text: 'kWh', display: true }
      }
    }
  };
  

}