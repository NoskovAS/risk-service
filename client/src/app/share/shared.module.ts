import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorMessageComponent } from './validator-message/validator-message.directive';
import { NgSelectorComponent } from './ng-selector/ng-selector.component';
import { ChanceFilterPipe,
         OrderByPipe,
         CostFilterPipe,
         RiskFilterPipe,
         PriorityFilterPipe,
         HoursFilterPipe,
         DateFilterPipe,
         SuggestionFilterPipe
      } from '../pipes/index';

@NgModule({
  imports: [
    CommonModule
 ],
declarations: [
  ValidatorMessageComponent,
  NgSelectorComponent,
  OrderByPipe,
  ChanceFilterPipe,
  CostFilterPipe,
  DateFilterPipe,
  HoursFilterPipe,
  PriorityFilterPipe,
  RiskFilterPipe,
  SuggestionFilterPipe,
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
],
providers: [
  ValidatorMessageComponent
]
})
export class SharedModule {}
