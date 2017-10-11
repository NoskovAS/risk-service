import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface SelectOption {
  title: string;
  value: string;
}


@Component({
  selector: 'app-custom-select',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true,
  }],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements ControlValueAccessor {

  constructor() {}

  @Input() options: SelectOption[] = [];

  selectedOption: SelectOption;
  get placeholder(): string {
    return this.selectedOption && this.selectedOption.hasOwnProperty('title') ? this.selectedOption.title : 'Select';
  }

  open: boolean = false;

  optionSelect(option: SelectOption) {
    this.writeValue(option.value);
    this.onTouched();
    this.open = false;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  get isOpen(): boolean {
    return this.open;
  }

  writeValue(value) {
    if (!value || typeof value !== 'string') {
      return;
    }
    const selectedEl = this.options.find(el => el.value === value);
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.onChange(this.selectedOption.value);
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
