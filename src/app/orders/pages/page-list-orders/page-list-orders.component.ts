import { UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public states = Object.values(StateOrder);
  private test$ = new Observable((xsub) => {
    xsub.next('flux de donnee');
  });
  private sub!: Subscription;
  public title = 'List orders';
  public headers = ['Type', 'Client', 'Nb Jours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'];
  public collection!: Order[];
  constructor(private orderService: OrdersService) {
    console.log(this.states);

    this.orderService.collection.subscribe((datas) => {
      console.log(datas);
      this.collection = datas;
    });

  }

  ngOnInit(): void {
    // test subscribe() observable perso avec un unsubscribe
    this.sub = this.test$.subscribe(
      (flux) => {
        // console.log(flux);
      }
    );
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.orderService.changeState(item, state).subscribe((res) => {
      // errors api
      item.state = res.state;
    });
  }

  ngOnDestroy(): void {
    // ex de unsubscribe
    this.sub.unsubscribe();
  }

}
