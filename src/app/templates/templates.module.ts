import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullwitdthComponent } from './components/template-fullwitdth/template-fullwitdth.component';
import { TemplateContainerComponent } from './components/template-container/template-container.component';



@NgModule({
  declarations: [TemplateFullwitdthComponent, TemplateContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateFullwitdthComponent, TemplateContainerComponent]
})
export class TemplatesModule { }
