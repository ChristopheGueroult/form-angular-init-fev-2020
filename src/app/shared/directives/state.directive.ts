import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {

  }

  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }

}
// state-canceled => this.appState vaut CANCELED
// state-option => this.appState vaut OPTION
// state-confirmed => this.appState vaut CONFIRMED
