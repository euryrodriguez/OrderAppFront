import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css',
})
export class CreateCustomer {
  private readonly formbuilder = inject(FormBuilder);
  createForm = this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required], 
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.required]]
  });
  saveCustomer(){
    console.log(this.createForm.value);
  }
}
