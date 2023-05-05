import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormSectionComponent } from '../form-section/form-section.component';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.closeAll();

    const dialogRef = this.dialog.open(FormSectionComponent, {
      width: '550px',
      height: '650px',
      data: { id: this.data.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // any code you want to execute after the dialog is closed
    });
  }
}
