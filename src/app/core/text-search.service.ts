import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from './api.service';

@Injectable()
export class TextSearchService extends ApiService {
  private _searchTerms = new Subject<string>();
  private _apiURL: string;

  constructor(private _http: Http) {super(); }

  public get apiURL(): string {
    return this._apiURL;
  }
  public  set apiURL(url: string) {
    this._apiURL = url;
  }

  public getCountries(): Observable<any[]> {
    const request = `https://code.totaralms.com/countries-json.php?search=new`;
    return this._http.get(request)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private getData(term: string): Observable<string[]> {
    return this._http.get(`${this.apiURL}${term}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public search(): Observable<string[]> {
    return this._searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.getData(term)
        : Observable.of<string[]>([])
      )
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      });
  }

  next(term: string): void {
    this._searchTerms.next(term);
  }

}
