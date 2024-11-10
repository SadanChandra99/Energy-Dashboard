import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string = 'Naresh Kamble';
  selectedPeriod: string = 'month'; // Default to 'month'
  monthlyOverview: number = 139.5;

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
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
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
