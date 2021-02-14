import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  @Input() tabName = "";
  @Input() index;
  @Output() tabAction = new EventEmitter();

  constructor() { }

  close() {
    this.tabAction.emit({ index: this.index, action: 'remove' });
  }

  rename(newName) {
    this.tabAction.emit({ name: newName, index: this.index, action: 'rename' });
  }

}
