import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'dashboard-home',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  title = 'dashboard';


  ngOnInit() {
    console.log(window.eventBus.getLastEvent("route-changed"));
  }


}
