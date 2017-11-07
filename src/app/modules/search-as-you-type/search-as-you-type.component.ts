import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { TextSearchService } from '../../core/text-search.service';

@Component({
  selector: 'app-search-as-you-type',
  templateUrl: './search-as-you-type.component.html',
  styleUrls: ['./search-as-you-type.component.css']
})
export class SearchAsYouTypeComponent implements OnInit {

  private _searchFromInput: Observable<string[]>;
  private _subscription: Subscription;

  constructor(private _searchService: TextSearchService) { }

  ngOnInit() {
    this._searchService.apiURL = `https://code.totaralms.com/countries-json.php?search=`;
    this._searchFromInput = this._searchService.search();
    this._subscription = this._searchFromInput.subscribe(result => console.log('Subscribed ' , result));
    this._searchService.next('new');
  }

}
