import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dashboard-settings',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container p-4">
      <div class="d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-primary" routerLink="/dashboard">
          <i class="bi bi-arrow-left me-2"></i>Torna indietro
        </button>
      </div>
      <div class="pt-4">
        <h2>Impostazioni</h2>
        <p>Qui puoi regolare le impostazioni dell'applicazione.</p>
      </div>
    </div>
  `,
})
export class SettingsComponent {
}
