import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { Customer } from '../../../models/Customer';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-customers',
  imports: [MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './list-customers.html',
  styleUrl: './list-customers.css',
})
export class ListCustomers implements OnInit {
  customers = signal<Customer[]>([]);
  private customerService = inject(CustomerService);
  
  ngOnInit(): void {
    this.ListCustomers();
  }
  ListCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers.set(data);
    })
  }
}
