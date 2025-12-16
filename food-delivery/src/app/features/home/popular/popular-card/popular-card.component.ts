import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  imports: [],
  templateUrl: './popular-card.component.html',
  styleUrl: './popular-card.component.css'
})
export class PopularCardComponent {
   @Input() item!: {
    imageSrc: string;
    title: string;
    count: string;
  };
}
