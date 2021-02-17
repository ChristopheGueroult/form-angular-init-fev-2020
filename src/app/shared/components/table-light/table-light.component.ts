import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableLightComponent {
  @Input() headers!: string[];
  constructor() {
  }

}
