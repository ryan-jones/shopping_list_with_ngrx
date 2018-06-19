import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  private onFeatureSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}

  public onSelect(feature: string): void {
    this.onFeatureSelected.emit(feature);
  }

  public onSave(): void {
    this.dataStorageService.storeRecipes().subscribe((res: Response) => {
      console.log('response', res);
    });
  }

  public onLogout(): void {
    this.authService.logout();
  }

  public onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
