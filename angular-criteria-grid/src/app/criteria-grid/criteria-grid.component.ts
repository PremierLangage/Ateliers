import { Component, OnInit } from '@angular/core';
import { CriteriaGridService } from './criteria-grid.service';
import { Criterion } from '../models/criteria-grid.models';


@Component({
  selector: 'app-criteria-grid',
  templateUrl: './criteria-grid.component.html',
  styleUrls: ['./criteria-grid.component.scss']
})
export class CriteriaGridComponent implements OnInit {
  items: Criterion[] = [];

  constructor(
    private readonly grid: CriteriaGridService
  ) { }

  ngOnInit() {
    this.items = this.grid.getCriteres();
  }

  addCritere() {
    this.grid.addCritere();
  }

  deleteCritere(item: Criterion) {
    this.grid.deleteCritere(item);
  }

  moveUp(item: Criterion) {
    let index:number = this.items.indexOf(item);
    let tmp:Criterion = this.items[index];
    this.items[index] = this.items[index-1];
    this.items[index-1]=tmp;
  }

  moveDown(item: Criterion) {
    let index:number = this.items.indexOf(item);
    let tmp:Criterion = this.items[index];
    this.items[index] = this.items[index+1];
    this.items[index+1]=tmp;
  }

  save(){
    console.log("Enregistrement de la grille");
    console.log(this.items);
    console.log(this.grid);
  }

  trackBy(_: number, item: Criterion) {
    return item.id;
  }

}
