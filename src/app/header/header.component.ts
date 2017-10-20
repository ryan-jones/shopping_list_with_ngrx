import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  onFeatureSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

  onSelect(feature: string) {
    this.onFeatureSelected.emit(feature);
  }

  onSave() {
    this.dataStorageService.storeRecipes().subscribe((res: Response) => {
      console.log('response', res)
    })
  }

  onLogout(){
    this.authService.logout();
  }
  onFetchData(){
    this.dataStorageService.getRecipes()
  }
}
