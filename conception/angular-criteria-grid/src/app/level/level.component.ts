import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Niveau } from '../models/criteria.models';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  @Input() niveau:Niveau;
  @Input() numberOfLevel:number;
  @Output() nbDeleteLevel = new EventEmitter();
  saisieDesc = '';
  saisiePoints:number;

  constructor() { }

  ngOnInit(): void {
    this.saisiePoints = this.niveau.points;
    this.saisieDesc = this.niveau.description;
  }

  changeDescription(){
    this.niveau.description = this.saisieDesc;
  }

  addPoints(){
    this.niveau.points = this.saisiePoints;
  }

  delete() {
    this.nbDeleteLevel.emit();
  }

}