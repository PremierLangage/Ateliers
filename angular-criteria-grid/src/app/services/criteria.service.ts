import { Injectable } from '@angular/core';
import { Critere, Niveau } from '../models/criteria.models';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {
  private items: Critere[]= [
    {description:'1er critere', niveaux:[
      {description:'null',points:0},
      {description:'bof',points:1},
      {description:'ok',points:2}
    ]},
  ]
  constructor() { }



  getCriteres() {
    return this.items;
  }

  add() {
    let newItem = {description:'',niveaux:[]};
    this.items[this.items.length-1].niveaux.forEach(element => {
      newItem.niveaux.push({description:'', points:element.points});
    });
    this.items.push(newItem);
  }

  delete(item:Critere) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
