import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlApi = environment.urlApi;
  private collection$: Observable<Order[]>;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}orders`);
  }


  // get collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // change state
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = {...item};
    obj.state = state;
    return this.update(obj);
  }

  // upadate item in collection
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  // delete item in collection

  // get item by id from collection
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }
}
