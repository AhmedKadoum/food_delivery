import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-res-card',
  imports: [],
  templateUrl: './pop-res-card.component.html',
  styleUrl: './pop-res-card.component.css'
})
export class PopResCardComponent {
@Input() item!: {
    imageSrc: string;
    title: string;
  };
}
