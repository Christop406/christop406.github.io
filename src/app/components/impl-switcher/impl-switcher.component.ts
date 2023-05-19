import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    CommonModule,
  ],
  selector: 'app-impl-switcher',
  templateUrl: './impl-switcher.component.html',
})
export class ImplSwitcherComponent {
  public hidden = false;

  public toggleHidden() {
    this.hidden = !this.hidden;
  }
}
