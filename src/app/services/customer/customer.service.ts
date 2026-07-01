import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer';
import { IResponse } from '../../models/IResponse';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:7064/Customers';

  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.apiUrl + '/ListCustomers');
  }
  saveCustomer(customer: Customer): Observable<IResponse<Customer>> {
    return this.http.post<IResponse<Customer>>(this.apiUrl + '/SaveCustomer', customer);
  }
}
