import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorMessageComponent } from './validator-message/validator-message.directive';
import {
  ChanceFilterPipe,
  OrderByPipe,
  CostFilterPipe,
  RiskFilterPipe,
  PriorityFilterPipe,
  HoursFilterPipe,
  DateFilterPipe,
  SuggestionFilterPipe
} from '../pipes/index';
import { ChartsModule } from 'ng2-charts';
import { LoaderComponent } from './loader/loader.component';
import { FocusOutDirective } from './focus-out/focus-out.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ValidatorMessageComponent,
    OrderByPipe,
    ChanceFilterPipe,
    CostFilterPipe,
    DateFilterPipe,
    HoursFilterPipe,
    PriorityFilterPipe,
    RiskFilterPipe,
    SuggestionFilterPipe,
    LoaderComponent,
    FocusOutDirective,
  ],
  exports: [
    ValidatorMessageComponent,
    OrderByPipe,
    ChanceFilterPipe,
    CostFilterPipe,
    DateFilterPipe,
    HoursFilterPipe,
    PriorityFilterPipe,
    RiskFilterPipe,
    SuggestionFilterPipe,
    ChartsModule,
    LoaderComponent
  ],
  providers: [
    ValidatorMessageComponent
  ]
})
export class SharedModule { }
