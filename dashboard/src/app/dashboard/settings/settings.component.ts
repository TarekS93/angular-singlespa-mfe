import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dashboard-settings',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>Impostazioni</h2>
        <button class="btn btn-outline-secondary" routerLink="/dashboard">
          <i class="bi bi-arrow-left me-2"></i>Torna indietro
        </button>
      </div>
      <p>Qui puoi regolare le impostazioni dell'applicazione.</p>
    </div>
  `,
})
export class SettingsComponent {
}
