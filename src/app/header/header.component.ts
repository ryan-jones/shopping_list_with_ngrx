import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() onFeatureSelected: EventEmitter<string> = new EventEmitter<string>();

  public onSelect = (feature: string): void => this.onFeatureSelected.emit(feature);
}
