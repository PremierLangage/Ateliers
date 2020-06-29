import { Component } from '@angular/core';
import { Critere } from './models/criteria.models';
import { CriteriaService } from './services/criteria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'criteria-grid';
  items: Critere[];
  
  constructor(
    private readonly cs: CriteriaService
  ) {}

  ngOnInit() {
    this.items = this.cs.getCriteres();
  }

  add(){
    this.cs.add();
  }
  
  delete(item:Critere){
    this.cs.delete(item);
  }

  affichage(){
    console.log(this.items);
  }

  moveUp(index:number){
    let tmp:Critere;
    tmp = this.items[index];
    this.items[index] = this.items[index-1];
    this.items[index-1]=tmp;
  }

  moveDown(index:number){
    let tmp:Critere;
    tmp = this.items[index];
    this.items[index] = this.items[index+1];
    this.items[index+1]=tmp;
  }

}
