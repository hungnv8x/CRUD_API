import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];
  message: string;

  constructor(private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
      this.message = this.messageService.message;
    });
  }

  delete(id) {
    if (confirm('Are you sure')) {
        this.userService.delete(id).subscribe(res => {
          if (res.status === 'error') {
            alert(res.message);
          } else {
            this.messageService.setMessage(res.message);
            this.getAllUser();
          }
        });
    }
  }
}
