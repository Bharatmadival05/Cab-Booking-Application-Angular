import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bookingalert',
  templateUrl: './bookingalert.component.html',
  styleUrls: ['./bookingalert.component.css']
})
export class BookingAlertComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
