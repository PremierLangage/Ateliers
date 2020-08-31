import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaGridComponent } from './criteria-grid.component';
import { CriterionComponent } from './criterion/criterion.component';
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
  declarations: [CriteriaGridComponent, CriterionComponent],
  exports: [
    CriteriaGridComponent
  ]
})
export class CriteriaGridModule { }
