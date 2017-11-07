import { Component } from '@angular/core';
import { Country} from '../../domain/main';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {
  public url = `https://code.totaralms.com/countries-json.php?limit=100&offset=0&search=`;
  private _countries: Country[];
  public term: string;

  public get countries(): Country[] {
    return this._countries;
  }

   public displayCountries(response) {
    this.term = response.term;
    this._countries = response.results;
    if (this.countries) {
      this.alphaSort(this.countries);
    }
   }

   private alphaSort(array) {
     return array.sort((a, b) => {
       const propA = a.country;
       const propB = b.country;
       if (propA < propB) {
         return -1;
       }
       if (propA > propB) {
         return 1;
       }
       return 0;
     });
   }
}
