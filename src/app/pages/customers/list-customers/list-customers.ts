import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../../services/customer/customer.service';
import { Customer } from '../../../models/Customer';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-customers',
  imports: [MatButtonModule, RouterLink, MatIconModule, MatTableModule],
  templateUrl: './list-customers.html',
  styleUrl: './list-customers.css',
})
export class ListCustomers implements OnInit {
  customers = signal<Customer[]>([]);
  dtColumns = ['id', 'firstName', 'lastName', 'email', 'options']
  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.ListCustomers();
  }
  ListCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers.set(data);
    })
  }
  deleteCustomer(id: number) {
    console.log(`Deleting customer with id: ${id}`);
  }
}
