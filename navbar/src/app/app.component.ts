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

  goToDashboard() {
    console.log("goToDashboard");
    navigateToUrl("/dashboard");
  }

  goToHome() {
    console.log("goToHome");
    navigateToUrl("/");
  }
}
