import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactUsReactiveForm } from '../../data/types/contact-us';
import { ContactUsNameInputComponent } from '../../components/contact-us-name-input/contact-us-name-input.component';
import { ContactUsEmailInputComponent } from '../../components/contact-us-email-input/contact-us-email-input.component';
import { ContactUsMessageTextComponent } from '../../components/contact-us-message-text/contact-us-message-text.component';

@Component({
  selector: 'app-reactive-form-contactus',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    ContactUsNameInputComponent,
    ContactUsEmailInputComponent,
    ContactUsMessageTextComponent,
  ],
  templateUrl: './reactive-form-contactus.component.html',
  styleUrl: './reactive-form-contactus.component.scss',
})
export class ReactiveFormContactusComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected contactUsForm!: FormGroup<ContactUsReactiveForm>;

  constructor() {
    this.contactUsForm = this.formBuilder.group<ContactUsReactiveForm>({
      name: this.formBuilder.control({ value: '', disabled: false }),
      email: this.formBuilder.control(
        { value: '', disabled: false },
        { validators: [Validators.email] }
      ),
      message: this.formBuilder.control({ value: '', disabled: false }),
    });
  }

  protected submit() {
    console.log('enviou', this.contactUsForm.getRawValue());
  }
}
