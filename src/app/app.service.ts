import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Plot } from './plot';

@Injectable()
export class AppService {

  componentRef: AppComponent;

  constructor() { }

  /** データを管理するコンポーネントを所持しておく */
  init(ref) {
    this.componentRef = ref;
  }

  addPlot(latLng) {

    const plotCnt = this.componentRef.plots.length;
    const id = plotCnt + 1;

    const plot = new Plot({
      id: id,
      longitude: latLng.lng,
      latitude: latLng.lat,
    });
    this.componentRef.plots.push(plot);
  }

  selectPlot(id) {

    let updatePlots = [];
    updatePlots = this.componentRef.plots.map(plot => {
      if (plot.id === id) {
        plot.selected = !plot.selected;
        if (plot.selected === true) {
          plot.label = {
            text: '選ばれた',
            color: 'black'
          };
        } else {
          plot.label = null;
        }
      }
      return plot;
    });
    this.componentRef.plots = updatePlots;
  }

}
