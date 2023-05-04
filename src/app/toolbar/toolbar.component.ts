import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../data.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  getIsAuth = false;
  constructor(public dialog: MatDialog, private DataService: DataService) {}
  ngOnInit() {
    this.getIsAuth = this.DataService.getIsAuth();
  }
  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '530px',
      minHeight: '550px',
      backdropClass: 'backdropBackground',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  logout() {
    this.DataService.logout();
  }
}
