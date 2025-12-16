import { Component } from '@angular/core';
import { CoverComponent } from "../cover/cover.component";

import { PopularComponent } from "./popular/popular.component";
import { ExcluComponent } from "./exclu/exclu.component";
import { PopularRestComponent } from "./popular-rest/popular-rest.component";



@Component({
  selector: 'app-home',
  imports: [CoverComponent, PopularComponent, ExcluComponent, PopularRestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
