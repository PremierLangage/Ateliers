import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Criteria, Level } from 'src/app/models/criteria-grid.models';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  @Input() item: Criteria;
  @Input() disabled = false;
  @Input() canMoveUp = false;
  @Input() canMoveDown = false;
  @Input() canDelete = false;

  @Output() delete = new EventEmitter<Criteria>();
  @Output() moveUp = new EventEmitter<Criteria>();
  @Output() moveDown = new EventEmitter<Criteria>();

  constructor() { }

  ngOnInit() {
  }

  deleteLevel(level: Level) {
    this.item.levels = this.item.levels.filter(
      e => e.id !== level.id
    );
  }

  addLevel() {
    let id = 0;
    let points = 0;
    for (const level of this.item.levels) {
      points = level.points + 1;
      if (level.id >= id) {
        id = level.id + 1;
      }
    }

    this.item.levels.push({
      id,
      points,
      description: '',
    });
  }

}
