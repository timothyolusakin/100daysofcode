import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = ' ';
  A =parseInt("");
  B = parseInt("");
  sum = this.A + this.B;
}
