import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ClientServiceService } from '../../../services/client-service.service';
import { Client, Credit } from '../../../models/client.model';


@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.css'
})
export class CreditsComponent {

  Credits: Credit[] = [];
  cliente: Client = {}
  userId: number | undefined;

  constructor(private route: ActivatedRoute, 
              private clientService: ClientServiceService,
              private router: Router){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.userId = +params['id'] 
    });
    //console.log(this.userId);
    this.getCredits()
  }

  getCredits(){
    this.clientService.getClientById(this.userId).subscribe({
      next: data => {
        this.cliente = data;
        if(Array.isArray(this.cliente.credits)){
          this.Credits = [];
          this.cliente.credits.forEach(credito => {
            this.Credits.push(credito)
          })
          console.log(this.Credits)
        }
      }, 
      error: err => {
        console.log(err)
      }
    })
  }

  crearCredito(){
    this.router.navigate(['/create-credit', this.userId])
  }
  
}
