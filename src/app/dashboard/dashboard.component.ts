import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userName: string = 'John Doe'; // Replace with actual user data as needed
  monthlyOverview: number = 450; // Replace with actual monthly kW data as needed

  constructor() {}

  ngOnInit(): void {
    // Fetch user and monthly data if needed
  }
}
