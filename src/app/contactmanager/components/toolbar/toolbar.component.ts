import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { NewContactManagerDialogComponent } from '../new-contact-manager-dialog/new-contact-manager-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();
  @Output() toggledir = new EventEmitter<void>();
  constructor(private dialog: MatDialog, public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }
  openAddContactManager(): void {
    const dialogRef = this.dialog.open(NewContactManagerDialogComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed', result);
      if (result) {
        this.openSnackBar('Contact Added', 'Navigate')
          .onAction().subscribe(() => {
            this.router.navigate(['/contactmanager', result.id]);
          });
      }
    });
  }
  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
