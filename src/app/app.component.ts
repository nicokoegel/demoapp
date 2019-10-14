import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result;
  param1;
  param2;
  calulate() {
      this.result = Number(this.param1) + Number(this.param2);
    }

}
