import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() plots;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  cardClicked(id) {
    this.appService.selectPlot(id);
  }

}
