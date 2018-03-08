import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Route, Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const Small_Width_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width:${Small_Width_BREAKPOINT}px)`);
  constructor(zone: NgZone, private userService: UserService, private router: Router) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  users: Observable<User[]>;
  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe(data => {
      if (data.length > 0) {
        this.router.navigate(['/contactmanager', data[0].id]);
      }
    });
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        // here you have to close sidenav
        this.sidenav.close();


      }
    });
  }
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
