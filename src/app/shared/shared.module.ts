import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, StateDirective, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    TableLightComponent,
    BtnComponent,
    StateDirective,
    TotalPipe
  ]
})
export class SharedModule { }
