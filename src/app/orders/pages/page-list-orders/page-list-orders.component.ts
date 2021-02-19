import { UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public headers = ['Actions', 'Type', 'Client', 'Nb Jours', 'Tjm HT', 'Total HT', 'Total TTC', 'State'];
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  constructor(
    private orderService: OrdersService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.collection$ = this.orderService.collection;
    // this.orderService.collection.subscribe((datas) => {
    //   console.log(datas);
    //   this.collection = datas;
    // });

  }

  ngOnInit(): void {
    // test subscribe() observable perso avec un unsubscribe
    this.sub = this.test$.subscribe(
      (flux) => {
        // console.log(flux);
      }
    );
  }

  public goToEdit(id: number): void {
    this.router.navigate(['order', 'edit', id]);
  }

  public changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.orderService.changeState(item, state).subscribe((res) => {
      // errors api
      item.state = res.state;
      this.cd.detectChanges();
    });
  }

  public openPopup(): void {
    console.log('popup');
  }

  ngOnDestroy(): void {
    // ex de unsubscribe
    this.sub.unsubscribe();
  }

}
