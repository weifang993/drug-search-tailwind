import { Component, OnInit } from '@angular/core';
import { DrugDataService } from '../shared/drug-data.service';
import { Search, Drug } from '../shared/drug-data.model';

@Component({
  selector: 'app-drug-search-tw',
  templateUrl: './drug-search-tw.component.html',
  styleUrls: ['./drug-search-tw.component.css']
})
export class DrugSearchTwComponent implements OnInit {
  selectedDrug : Drug;
  drugList : Drug[];
  
  // search criteria
  search : Search;  

  constructor(private drugDataService : DrugDataService) {  
    this.drugDataService = drugDataService;
    this.drugList = [];
  }

  ngOnInit() {  
    this.search = new Search();
    this.search.text = "";

    // fake list
    this.drugList = [
       {"din": "12345678", "brandName": "Drug for head ache", "manufacturer": { "companyName": "APO Canada"}}, 
       {"din": "23456789", "brandName": "Drug for serious problem in the neck", "manufacturer": { "companyName": "NEXT Drugs Inc."}}, 
       {"din": "34567890", "brandName": "Drug for killing Covid-19 virus - will boost morale of the country", "manufacturer": { "companyName": "Johnson & Johnson"}}, 
      
      ]
  }

  searchDrug(){ 
    this.selectedDrug = null;
    this.drugList = [];

    this.drugDataService.getDrugByBrandName(this.search.text).subscribe((drugs) => {
      this.drugList = drugs;
    });
  }

  selectDrug(drug : Drug){
    this.selectedDrug = drug;
    console.log('selected: ', drug)
  }

}
