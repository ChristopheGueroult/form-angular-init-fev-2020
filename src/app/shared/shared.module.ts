import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    StateDirective
  ]
})
export class SharedModule { }
