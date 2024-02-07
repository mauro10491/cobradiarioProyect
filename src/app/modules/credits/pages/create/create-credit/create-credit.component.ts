import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Credit } from '../../../../../shared/models/client.model';
import { CreditsService } from '../../../../../shared/services/credits.service';


@Component({
  selector: 'app-create-credit',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './create-credit.component.html',
  styleUrl: './create-credit.component.css'
})
export class CreateCreditComponent {

  clientId: number | undefined;

  constructor(private creditsService: CreditsService,
              private router: ActivatedRoute){}

  ngOnInit(){
    this.router.params.subscribe(params => {
      this.clientId = +params['id']
      console.log(this.clientId)
    })
  }

  creditMount = new FormControl<number | null>(null, Validators.required)
  interestRate = new FormControl<number | null>(null, Validators.required)
  payments = new FormControl<number | null>(null, Validators.required)
  temporalityId = new FormControl<number | null>(null, Validators.required)
  userId = new FormControl<number | null>(null, Validators.required) 

  crearCredito(){
    const credit: Credit = {
      creditMount: this.creditMount.value,
      interestRate: this.interestRate.value,
      payments: this.payments.value,
      clientId: this.clientId,
      temporalityId: this.temporalityId.value,
      userId: this.userId.value
    }
    this.creditsService.crearCredito(credit).subscribe({
      next: data => {
        console.log('Credito creado con exito')
      },
      error: err => {
        console.log(err)
      }
    });


    console.log(credit)
  }



}
