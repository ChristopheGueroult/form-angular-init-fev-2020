import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateFullwidthComponent } from './components/template-fullwidth/template-fullwidth.component';



@NgModule({
  declarations: [TemplateContainerComponent, TemplateFullwidthComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateContainerComponent, TemplateFullwidthComponent]
})
export class TemplatesModule { }
