import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent {
  @Input()
  pageTitle: string = 'Convert';

  @Input()
  breadcrumbPageTitle: string = 'Convert';
}
