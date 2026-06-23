import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-list-customers',
  imports: [],
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
