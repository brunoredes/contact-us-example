import { FormControl } from '@angular/forms';

export type ContactUsTemplateDriven = {
  name: string;
  email: string;
  message: string;
};

export type ContactUsReactiveForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
};
