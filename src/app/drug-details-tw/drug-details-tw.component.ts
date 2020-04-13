import { Component, OnInit, Input } from '@angular/core';
import { Drug } from '../shared/drug-data.model';

@Component({
  selector: 'app-drug-details-tw',
  templateUrl: './drug-details-tw.component.html',
  styleUrls: ['./drug-details-tw.component.css']
})
export class DrugDetailsTwComponent implements OnInit {
  @Input() drug : Drug; 

  constructor() { }

  ngOnInit(): void {
  }

}
