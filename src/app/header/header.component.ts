import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {

    @Output() onFeatureSelected: EventEmitter<string> = new EventEmitter<string>();

    onSelect(feature: string) {
        console.log('feature', feature)
        this.onFeatureSelected.emit(feature);
    }
}