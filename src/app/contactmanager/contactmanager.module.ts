import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactManagerDialogComponent } from './components/new-contact-manager-dialog/new-contact-manager-dialog.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MaincontentComponent },
      { path: '', component: MaincontentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService],
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MaincontentComponent, SidenavComponent, NotesComponent,
    NewContactManagerDialogComponent],
  entryComponents: [NewContactManagerDialogComponent]
})
export class ContactmanagerModule { }
