import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactUsTemplateDriven } from '../../data/types/contact-us';
import { ContactUsNameInputComponent } from '../../components/contact-us-name-input/contact-us-name-input.component';
import { JsonPipe } from '@angular/common';
import { ContactUsEmailInputComponent } from '../../components/contact-us-email-input/contact-us-email-input.component';
import { ContactUsMessageTextComponent } from '../../components/contact-us-message-text/contact-us-message-text.component';

@Component({
  selector: 'app-template-driven-form-contactus',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    ContactUsNameInputComponent,
    ContactUsEmailInputComponent,
    ContactUsMessageTextComponent,
  ],
  templateUrl: './template-driven-form-contactus.component.html',
  styleUrl: './template-driven-form-contactus.component.scss',
})
export class TemplateDrivenFormContactusComponent {
  protected contactUs: ContactUsTemplateDriven = {
    name: '',
    email: '',
    message: '',
  };

  protected submit() {
    console.log('enviou', this.contactUs);
  }
}
