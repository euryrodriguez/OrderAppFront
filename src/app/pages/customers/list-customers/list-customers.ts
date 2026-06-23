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
  protected readonly console = console; 
  
  ngOnInit(): void {
    this.ListCustomers();
  }
  ListCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      console.log('Respuesta de la API:');
      console.log(data);
      this.customers.set(data);
    })
  }
}
