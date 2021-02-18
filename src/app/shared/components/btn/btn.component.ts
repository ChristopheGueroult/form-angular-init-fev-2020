import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() text!: string;
  @Input() path!: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  // doit etre un event
  // doit etre un observable
  // doit pas etre initialisé (pas de next() à la creation de l'observable)
  // observable chaud
  constructor() { }

  ngOnInit(): void {

  }

  public action(): void {
    this.clicked.emit();
  }

}
