import { Component, OnInit } from '@angular/core';
import { CriteriaGridService } from './criteria-grid.service';
import { Criteria } from '../models/criteria.models';

@Component({
  selector: 'app-criteria-grid',
  templateUrl: './criteria-grid.component.html',
  styleUrls: ['./criteria-grid.component.scss']
})
export class CriteriaGridComponent implements OnInit {
  items: Criteria[] = [];

  constructor(
    private readonly grid: CriteriaGridService
  ) { }

  ngOnInit() {
    this.items = this.grid.getCriteres();
  }

  addCritere() {
    this.grid.addCritere();
  }

  deleteCritere(item: Criteria) {
    this.grid.deleteCritere(item);
  }

  moveUp(item: Criteria) {
    // TODO move up
  }

  moveDown(item: Criteria) {
    // TODO move down
  }

  trackBy(_: number, item: Criteria) {
    return item.id;
  }

}
