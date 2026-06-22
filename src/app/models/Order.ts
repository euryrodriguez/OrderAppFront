import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Order{
    Id?:number,
    OrderNumber:string,
    CustomerId:number,
    CreatedAt:string,
    Customers?:Customer,
    Details:Array<OrderDetail>
}

export interface OrderDetail{
    Id?:number,
    OrderId:number, 
    ProductId:number,    
    Qty:number,
    Price:number
    Discount:number, 
    Total:number, 
    CreatedAt:string,
    Orders:Order
    Products:Product
}