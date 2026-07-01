import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../services/customer/customer.service';
import { MatSelectModule } from '@angular/material/select';
import { Customer } from '../../../models/Customer';
import { IResponse } from '../../../models/IResponse';
import { AlertService } from '../../../shared/services/alert';
@Component({
  selector: 'app-create-customer',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatSelectModule],
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.css',
})
export class CreateCustomer {
  private readonly router = inject(Router);
  private readonly formbuilder = inject(FormBuilder);
  private readonly customerService = inject(CustomerService);
  private readonly alertService = inject(AlertService);
  createForm = this.formbuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.required]]
  });
  saveCustomer() {
    let customer = this.createForm.value as Customer;
    if (this.createForm.valid) {
      this.customerService.saveCustomer(customer).subscribe((response: IResponse<Customer>) => {
        if (response.status > 0) {
          this.router.navigate(['/customers']);
          this.alertService.success('Cliente Registrado!', response.message);
        } else {
          this.alertService.error('Error.', response.message);
        }
      });
    }
  }
}
