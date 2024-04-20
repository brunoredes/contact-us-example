import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-contact-us-message-text',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-message-text.component.html',
  styleUrl: './contact-us-message-text.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactUsMessageTextComponent),
      multi: true,
    },
  ],
})
export class ContactUsMessageTextComponent implements ControlValueAccessor {
  @Input() public contactText = '';

  protected value = '';
  protected disabled = false;

  protected onChanged!: (value: string) => void;
  protected onTouched!: () => void;

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
