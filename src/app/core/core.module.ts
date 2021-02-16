import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginModule } from '../login/login.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UiModule,
    LoginModule,
    IconsModule,
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
