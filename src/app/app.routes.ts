import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contact-us' },
  {
    path: 'contact-us',
    children: [
      {
        path: 'reactive-form',
        data: { formType: 'reactive' },
        loadComponent: () =>
          import(
            './container/reactive-form-contactus/reactive-form-contactus.component'
          ).then((c) => c.ReactiveFormContactusComponent),
      },
      {
        path: 'template-driven',
        data: { formType: 'templateDriven' },
        loadComponent: () =>
          import(
            './container/template-driven-form-contactus/template-driven-form-contactus.component'
          ).then((c) => c.TemplateDrivenFormContactusComponent),
      },
    ],
  },
];
