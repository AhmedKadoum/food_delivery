import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-delivery';
}
