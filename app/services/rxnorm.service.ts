import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rxnormdata } from '../models/rxnormdata.model';
import { tap, map } from 'rxjs/operators';
import { InteractionResponse } from '../models/interaction-response.model'; 

@Injectable({
  providedIn: 'root'
})
export class RxnormService {

  constructor(private httpClient: HttpClient) { }


   get(rxcui: string){
    return this.httpClient.get('https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=' + rxcui, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log('https://rxnav.nlm.nih.gov/REST/rxcui?name=wellbutrin', data),
        error => console.log('https://rxnav.nlm.nih.gov/REST/rxcui?name=wellbutrin', error)
      )
    );
  }

   getRx(name: string): Observable<Rxnormdata>{
     return this.httpClient.get<Rxnormdata>('https://rxnav.nlm.nih.gov/REST/rxcui?name=' + name);
   }

   getJSON(rxcui: string): Observable<InteractionResponse>{
    return this.httpClient.get<InteractionResponse>('https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=' + rxcui);
  }



}

