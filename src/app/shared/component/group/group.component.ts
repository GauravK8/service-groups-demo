import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '../../../core/types/Group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html'
})
export class GroupComponent {

    @Input() group: Group;
    @Output() addSubgroup = new EventEmitter<number>();
    expand: boolean = false;

    constructor() {

    }

    onAddSubgroup() {
      this.addSubgroup.emit(this.group.id);
    }

}