import { Component } from "@angular/core";
import { navigateToUrl } from "single-spa";

@Component({
  selector: "navbar-root",
  imports: [],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "navbar";
  currentRoute: string = '';

  constructor() {
    this.currentRoute = window.location.pathname;
  }

  goToDashboard() {
    this.currentRoute = "/dashboard";
    navigateToUrl(this.currentRoute);
    window.eventBus.emit("route-changed", this.currentRoute);
  }

  goToHome() {
    this.currentRoute = "/";
    navigateToUrl(this.currentRoute);
    window.eventBus.emit("route-changed", this.currentRoute);

  }
}
