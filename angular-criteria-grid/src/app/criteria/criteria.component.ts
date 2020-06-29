import { Component, OnInit, Input, Output } from '@angular/core';
import { Critere, Niveau } from '../models/criteria.models';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})

export class CriteriaComponent implements OnInit {
  @Input() critere: Critere;
  saisieDesc = '';

  constructor() { }

  ngOnInit(): void {
    this.saisieDesc = this.critere.description;
  }

  changeDescription(){
    this.critere.description = this.saisieDesc;
  }

  addLevel(){
    this.critere.niveaux.push(
      {description:'', points: this.critere.niveaux[this.critere.niveaux.length-1].points + 1}
    );
  }

  deleteLevel(level:Niveau){
    this.critere.niveaux.splice(this.critere.niveaux.indexOf(level),1);
  }


}
