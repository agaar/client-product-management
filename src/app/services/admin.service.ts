import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { User } from '../model/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

let API_URL = "http://localhost:8080/api/admin/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  updateUser(user: User): Observable<any> {
    return this.http.put(API_URL + "user-update", JSON.stringify(user),
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post(API_URL + "user-delete", JSON.stringify(user),
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  findAllUsers(): Observable<any> {
    this.http.get(API_URL + "user-all",
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  numberOfUsers(): Observable<any> {
    this.http.get(API_URL + "user-number",
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(API_URL + "product-create", JSON.stringify(product),
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(API_URL + "product-update", JSON.stringify(product),
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  deleteProduct(product: Product): Observable<any> {
    this.http.post(API_URL + "product-delete", JSON.stringify(product),
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  findAllProducts(): Observable<any> {
    return this.http.get(API_URL + "product-all", 
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  numberOfProducts(): Observable<any> {
    return this.http.get(API_URL + "product-number", 
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  findAllTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-all", 
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }

  numberOfTransactions(): Observable<any> {
    return this.http.get(API_URL + "transaction-number", 
    {headers: {"Content-Type": "application/json; charset=UTF-8"}});
  }
}


