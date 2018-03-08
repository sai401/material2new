import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewContactManagerDialogComponent } from '../new-contact-manager-dialog/new-contact-manager-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<void>();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openAddContactManager(): void {
    const dialogRef = this.dialog.open(NewContactManagerDialogComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog was closed', result);
    });
  }


}
