import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public title = 'List orders';
  public headers = ['Type', 'Client', 'Nb Jours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'];
  public collection!: Order[];
  constructor(private orderService: OrdersService) {
    this.orderService.collection.subscribe((datas) => {
      console.log(datas);
      this.collection = datas;
    });
  }

  ngOnInit(): void {
  }

}
