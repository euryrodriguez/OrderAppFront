import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer';


@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7064/Customers';

  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl + '/ListCustomers');
  }
}
