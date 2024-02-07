import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public dialog: MatDialog,
    private readonly snackBar: MatSnackBar) { }


  
  alert(message: string, title = 'Notice', okCallback: () => void = () => { }) {
    const dialogRef = this.dialog.open(AlertDialog, {
      width: '250px',
      data: { message: message, title: title },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && okCallback) {
        okCallback();
      }
    });
  }

  success(message: string) {
    this.openSnackBar(message, '', 'success-snackbar');
  }

  openSnackBar(
    message: string,
    action: string,
    className = '',
    duration = 1000
  ) {
    this.snackBar.open(message, action, {
      duration: duration,
      panelClass: [className]
    });
  }
}

export class AlertDialog {
  constructor(
    public dialogRef: MatDialogRef<AlertDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

export interface DialogData {
  message: string;
  title: string;
}