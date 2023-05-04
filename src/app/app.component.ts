import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tourism';
  isAuth = false;
  private isAuthListenerSubs!: Subscription;

  constructor(private DataService: DataService) {}

  ngOnInit() {
    this.DataService.getIsAuth();
    this.isAuth = this.DataService.getIsAuth();
    this.isAuthListenerSubs =
      this.DataService.getAuthStatusListener().subscribe((isAuthenticated) => {
        this.isAuth = isAuthenticated;
      });
    this.DataService.autoAuthUser();
    console.log(this.isAuth);
    console.log(this.DataService.autoAuthUser());
  }
}
