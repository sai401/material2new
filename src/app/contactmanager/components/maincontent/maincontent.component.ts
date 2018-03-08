import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserService) { }
  user: User;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = null;
      const id = Number(params['id']);
      this.service.users.subscribe(users => {
        if (users.length === 0) {
          return;
        }
        setTimeout(() => {
          this.user = this.service.userId(id);
        }, 500);
      });
    });
  }

}
