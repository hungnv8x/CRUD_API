import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageService} from '../../../services/message.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.findById(id).subscribe(res => {
      if (res.status === 'error') {
        alert(res.message);
      } else {
        this.editUserForm = this.fb.group({
          name: [res.user.name],
          email: [res.user.email],
          id: [res.user.id]
        });
      }
    });
  }

  submit() {
    const data = this.editUserForm.value;
    this.userService.update(data, data.id).subscribe(res => {
      if (res.status === 'error') {
        alert(res.message);
      } else {
        this.messageService.setMessage(res.message);
        this.router.navigate(['admin/users']);
      }
    });
  }

}
