import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() plots;

  lat: number = 35.681167;
  lng: number = 139.767052;
  zoom: number = 16;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  mapClicked(e) {
    this.appService.addPlot(e.coords);
  }

}
