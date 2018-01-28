export class Plot {
  id: number;
  latitude: number;
  longitude: number;
  comment: string;
  selected: boolean;
  label: any;

  constructor(obj) {
    this.id        = obj.id        || null;
    this.longitude = obj.longitude || null;
    this.latitude  = obj.latitude  || null;
    this.comment   = obj.comment   || '';
    this.selected  = obj.selected  || false;;
    this.label     = obj.label     || null;
  }
}
