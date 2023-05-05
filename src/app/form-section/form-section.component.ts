import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css'],
})
export class FormSectionComponent {
  bookingForm: FormGroup;
  dateRange: FormGroup;

  constructor(private fb: FormBuilder, private DataService: DataService) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      requests: [''],
    });
    this.dateRange = this.fb.group({
      startDate: [''],
      endDate: [''],
    });
  }

  onSubmit() {
    // Send email
    const name = this.bookingForm.get('name')?.value;
    const email = this.bookingForm.get('contact')?.value;
    const startDate = this.bookingForm.get('startDate')?.value;
    const endDate = this.bookingForm.get('endDate')?.value;
    const requests = this.bookingForm.get('requests')?.value;

    this.DataService.sendEmail(
      name,
      email,
      startDate,
      endDate,
      requests
    ).subscribe(
      (response) => {
        console.log('Email sent successfully!', response);
      },
      (error) => {
        console.log('Error sending email:', error);
      }
    );
  }
  get startDate() {
    return this.dateRange.get('startDate');
  }

  get endDate() {
    return this.dateRange.get('endDate');
  }

  onDateRangeSelected() {
    const start = this.startDate?.value;
    const end = this.endDate?.value;
    if (start && end && start < end) {
      this.bookingForm.patchValue({
        startDate: start,
        endDate: end,
      });
    } else {
      this.bookingForm.patchValue({
        startDate: '',
        endDate: '',
      });
    }
  }
}
