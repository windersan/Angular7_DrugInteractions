import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rxnormdata } from '../models/rxnormdata.model';
import { tap, map } from 'rxjs/operators';
import { InteractionResponse } from '../models/interaction-response.model'; 


@Injectable({
  providedIn: 'root'
})
export class DrugInteractionService {

  constructor(private httpClient: HttpClient) { }


  getJSON(): Observable<InteractionResponse>{
    return this.httpClient.get<InteractionResponse>('https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=42568');
  }

}
