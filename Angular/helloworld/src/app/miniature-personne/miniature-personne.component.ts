import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';

@Component({
  selector: 'app-miniature-personne',
  templateUrl: './miniature-personne.component.html',
  styleUrls: ['./miniature-personne.component.css'],
})
export class MiniaturePersonneComponent implements OnInit {
  @Input() public personne!: Personne;
  @Output() public deleteMe = new EventEmitter();
  constructor() {}

  reagirAuClic() {
    this.deleteMe.emit();
  }

  ngOnInit(): void {}
}
