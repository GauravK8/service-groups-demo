import { Component, OnInit } from '@angular/core';
import { SubGroup } from '../core/types/SubGroup';
import { Group } from '../core/types/Group';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-service-groups',
  templateUrl: './service-groups.component.html',
  styleUrls: ['./service-groups.component.scss']
})
export class ServiceGroupsComponent implements OnInit {
  public showAddGroupSection = false;
  public newGroup;

  public showSubGroupSection = false;
  public selectedGroupId = -1;
  public newSubGroup;

  public group: Array<Group> = [];
  public subGroup: Array<SubGroup> = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getGroups().subscribe(response => {
      this.group = response;
    });
  }

  showAddSubGroup(groupId: number) {
    this.selectedGroupId = groupId;
    this.showSubGroupSection = true;
  }

  addSubGroup() {
    const index = this.group.filter(i => i.id === this.selectedGroupId)[0].id;
    if (this.newSubGroup.length > 0)
      this.group[index]['subGroups'].push({ name: this.newSubGroup, value: this.newSubGroup, checked: false });

    this.newSubGroup = "";
    this.selectedGroupId = -1;
    setTimeout(() => {
      this.showSubGroupSection = false;
    }, 500);
  }

  showAddGroup(show) {
    this.showAddGroupSection = show;
  }

  addGroup() {

    if (this.newGroup.length > 0)
      this.group.push({ id: this.group.length, name: this.newGroup, value: this.newGroup, checked: false, subGroups: [] });

    this.newGroup = "";
    setTimeout(() => {
      this.showAddGroup(false);
    }, 500);
  }

  deleteGroups() {
    const selected = this.group.filter(i => i.checked === true);
    selected.map(i => this.group.splice(this.group.indexOf(i), 1));
  }

}
