import {Component, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Option} from './option';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: Option[] = [];
  selectedOption: Option = {icon: '', title: '', value: ''};
  isActive: boolean = false;

  constructor() {}

  writeValue(selOption: any): void {
    if (!selOption) {
      if (this.options && this.options.length) {
        this.selectedOption = this.options[0];
      }
      return;
    }

    if (typeof selOption !== 'object') {
      this.selectedOption = this.options.find(option => option.value === selOption);
    } else {
      this.selectedOption = selOption;
    }

    this.onChange(selOption.value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  getSelectIcon(isActive): string {
    return isActive ? 'icon-chevron-down' : 'icon-chevron-left';
  }

  getFilteredOptions = (options: Option[]) =>
    options.filter(option => option.value !== this.selectedOption.value);
}
