import { Component, OnInit, Inject, inject } from '@angular/core';
import { PHONE_SERVICE } from './phone.service';

@Component({
  selector: 'ng2-demo',
  template: `
    <h2>Phones Data</h2>
    <h3>
      {{phones.length}} Phones found.
    </h3>
  `
})
export class Ng2DemoComponent implements OnInit {

  phones: any[] = [];

  constructor(
    @Inject(PHONE_SERVICE) private phoneService: any) {                
    }

    ngOnInit() {
      this.phones = this.phoneService.query();         
    }

}
