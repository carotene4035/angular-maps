import { Component } from '@angular/core';
import { Plot } from './plot';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  constructor(private appService: AppService) { }

  plots: Array<Plot> = [
  ];

  ngOnInit() {
    this.appService.init(this);
  }

  ngOnDestroy() {
    this.appService.init(null);
  }
}
