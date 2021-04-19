import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IVechicle } from 'src/app/shared/models/common.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() vechicles!: Array<IVechicle>;
  @Input() loading!: boolean;
  
  constructor() { }

}
