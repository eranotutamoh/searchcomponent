import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { TextSearchService } from '../../core/text-search.service';

@Component({
  selector: 'app-search-as-you-type',
  templateUrl: './search-as-you-type.component.html',
  styleUrls: ['./search-as-you-type.component.css']
})
export class SearchAsYouTypeComponent implements OnInit {

  @Input() url: string;
  @Output() results = new EventEmitter<any>();

  private _searchFromInput: Observable<string[]>;
  private _subscription: Subscription;

  constructor(private _searchService: TextSearchService) { }

  ngOnInit() {
    this._searchService.apiURL = this.url;
    this._searchFromInput = this._searchService.search();
    this._subscription = this._searchFromInput.subscribe(result => this.results.emit({data: result}));
  }

  search(term: string, keyPressed): void {
    this._searchService.next(term);
  }

}
