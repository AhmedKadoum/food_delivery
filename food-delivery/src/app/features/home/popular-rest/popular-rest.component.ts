import { Component } from '@angular/core';
import { PopResCardComponent } from "./pop-res-card/pop-res-card.component";

@Component({
  selector: 'app-popular-rest',
  imports: [PopResCardComponent],
  templateUrl: './popular-rest.component.html',
  styleUrl: './popular-rest.component.css'
})
export class PopularRestComponent {
  items=[
    {
      imageSrc: 'assets/images/pop-res/11.png',
      title: 'McDonald’s London',

    },
      {
      imageSrc: 'assets/images/pop-res/12.png',
      title: 'Papa Johns',
      },
      {
      imageSrc: 'assets/images/pop-res/13.png',
      title: 'KFC West London',
            },{
      imageSrc: 'assets/images/pop-res/14.png',
      title: 'Texas Chicken',

      },{
      imageSrc: 'assets/images/pop-res/15.png',
      title: 'Burger King',
            },{
      imageSrc: 'assets/images/pop-res/16.png',
      title: 'Shaurma 1',

      }

  ]
}
