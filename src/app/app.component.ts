import {Component, OnInit} from '@angular/core';
import {UserService} from './core/services/user.service';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tr-presentation';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.login('whatever', 'somepassword').subscribe(console.log, console.log);
  }
}
