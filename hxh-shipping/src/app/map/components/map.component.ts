import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

import { IVechicle } from '../../shared/models/common.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MapComponent {

  @Input() vechicles!: Array<IVechicle>;
  @Input() loading!: boolean;
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow
  info = ''
  options: google.maps.MapOptions = {
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  } 
  center = { lat: 33.9205979515310, lng: -84.34230125155243 };

  constructor() {}

  openMarkerInfo(marker: MapMarker, level: string) {
    this.info = level;
    this.infoWindow.open(marker);
  }
}
