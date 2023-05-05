import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { LocationDetailComponent } from '../location-detail/location-detail.component';

@Component({
  selector: 'app-togo',
  templateUrl: './togo.component.html',
  styleUrls: ['./togo.component.css'],
})
export class TogoComponent implements OnInit {
  constructor(private dataService: DataService, private dialog: MatDialog) {}

  locations: any;
  minPrice = 1;
  maxPrice = 1000;

  ngOnInit() {
    this.minPrice = 1;
    this.maxPrice = 1000;
    this.getFilteredLocations();
  }
  formatLabel(value: number): string {
    return `${value}`;
  }
  getFilteredLocations() {
    this.dataService
      .getLocation(this.minPrice, this.maxPrice)
      .subscribe((data: any) => {
        this.locations = data;
      });
  }

  openDialog(id: number, image: string) {
    const dialogRef = this.dialog.open(LocationDetailComponent, {
      width: '900px',
      height: '700px',
      data: { id, image },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // any code you want to execute after the dialog is closed
    });
  }
}
