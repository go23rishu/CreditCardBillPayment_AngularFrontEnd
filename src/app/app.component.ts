import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Accounts Module';

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.navigateByUrl("/view-all");
  }


}
