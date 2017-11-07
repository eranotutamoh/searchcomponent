import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public url = `https://code.totaralms.com/countries-json.php?limit=100&offset=0&search=`;

  constructor() { }

  ngOnInit() {
  }

   public displayCountries($event: any) {
    console.log('YEAH' , $event.data);
   }
}
