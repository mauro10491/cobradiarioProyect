import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Credit, User } from '../../../models/user.model';

@Component({
  selector: 'app-credit-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './credit-users.component.html',
  styleUrl: './credit-users.component.css'
})
export class CreditUsersComponent {

  Credits: Credit[] = [];
  userId: number | undefined;
  user: User = {}

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router){

  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
    })
    console.log(this.userId);
    this.getCredits()
  }

  getCredits(){
    this.userService.getUserById(this.userId).subscribe({
      next: data => {
        this.user = data;
        if(Array.isArray(this.user.credits)){
          this.Credits = []
          this.user.credits.forEach(credito => {
            this.Credits.push(credito);
          })
          console.log(this.Credits);
        }
      }, 
      error: err => {
        console.log(err);
        
      }
    })
  }

  createCredit(){
    this.router.navigate(['/create-credit-user', this.userId])
  }
}
