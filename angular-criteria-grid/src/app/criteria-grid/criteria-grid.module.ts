import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaGridComponent } from './criteria-grid.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [CriteriaGridComponent, CriteriaComponent],
  exports: [
    CriteriaGridComponent
  ]
})
export class CriteriaGridModule { }
