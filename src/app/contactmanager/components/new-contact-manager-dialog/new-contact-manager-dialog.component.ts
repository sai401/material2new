import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-manager-dialog',
  templateUrl: './new-contact-manager-dialog.component.html',
  styleUrls: ['./new-contact-manager-dialog.component.scss']
})
export class NewContactManagerDialogComponent implements OnInit {

  user: User;
  avatars: string[] = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  constructor(private dialogRef: MatDialogRef<NewContactManagerDialogComponent>, private service: UserService) { }
  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.service.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
