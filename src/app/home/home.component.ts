import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  template: `
    <section>

      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>

      <section class="results">
        <app-housing-location></app-housing-location>
      </section>
      

    </section>
  `,
  styleUrls: ['home.component.css'],
})
export class HomeComponent {

}

