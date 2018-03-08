import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-manager-dialog',
  templateUrl: './new-contact-manager-dialog.component.html',
  styleUrls: ['./new-contact-manager-dialog.component.scss']
})
export class NewContactManagerDialogComponent implements OnInit {

  user: User;
  constructor(private dialogRef: MatDialogRef<NewContactManagerDialogComponent>) { }

  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.dialogRef.close(this.user);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
