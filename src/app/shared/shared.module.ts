import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './component/group/group.component';

const moduleComponents = [
    GroupComponent
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents
})

export class SharedModule { }