import { Injectable } from '@angular/core';
import { Criteria, Level } from '../models/criteria.models';

@Injectable({
  providedIn: 'root',
})
export class CriteriaGridService {

  private nextId = 0;
  private items: Criteria[] = [
    {
      id: 0,
      description: '1er critere',
      levels: [
        { id: 0, description: 'null', points: 0 },
        { id: 1, description: 'bof', points: 1 },
        { id: 2, description: 'ok', points: 2 },
      ],
    },
  ];

  getCriteres() {
    return this.items;
  }

  addCritere() {
    const newItem: Criteria = {
      id: ++this.nextId,
      description: '',
      levels: []
    };

    const last = this.items[this.items.length - 1];
    last.levels.forEach((e) => {
      newItem.levels.push({
        id: e.id,
        description: '',
        points: e.points });
    });
    this.items.push(newItem);
  }

  deleteCritere(item: Criteria) {
    const index = this.items.findIndex(e => e.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

}
