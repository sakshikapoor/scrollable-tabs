import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {

  @Input() tabName;

  constructor() { }

  ngOnInit() {
  }

}
