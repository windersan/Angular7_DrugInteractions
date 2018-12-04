import { Component, OnInit } from '@angular/core';
import { Rxnormdata } from '../models/rxnormdata.model';
import { RxnormService } from '../services/rxnorm.service';
import { DrugInteractionService } from '../services/drug-interaction.service';
import { HttpClient } from "@angular/common/http";
import { InteractionResponse } from '../models/interaction-response.model'; 
import { InteractionTypeGroup } from '../models/interaction-type-group.model'; 
import { InteractionType } from '../models/interaction-type.model';  
import { InteractionPair } from '../models/interaction-pair.model';
import { FormGroup, FormControl } from '@angular/forms';  

@Component({
  selector: 'app-drug-interaction',
  templateUrl: './drug-interaction.component.html',
  styleUrls: ['./drug-interaction.component.css']
})
export class DrugInteractionComponent implements OnInit {

  rxnormdata: Rxnormdata
  result: string
  interactionResponse: InteractionResponse
  interactionTypeGroup: InteractionTypeGroup[] 
  drugList: string[] = []
  drugForm: FormGroup
  drug1: string
  drug2: string
  link: string = 'https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui='
  rxcui: string
  rxcui2: string  

  constructor(
    private _rxnormService: RxnormService, private httpClient: HttpClient,
    private _drugInteractionService: DrugInteractionService
  ) { 
    
  }

  ngOnInit() {
    this.drugForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
   // this._rxnormService.get().subscribe(x => {this.result = x;
    // console.log("kitties?" + this.result);  
    //});
    
  //  this._drugInteractionService.getJSON().subscribe(x => {this.interactionResponse = x;
    //  console.log("kitties?!" + this.interactionResponse.userInput.rxcui);
   // });

    console.log("kitties??");
    



  }

  onSubmit(): void {

    console.log(this.drugForm.value);

   // this._authService.authenticate(this.loginForm.value).subscribe(x => 
     // {
      //  this.user = x;
     //   if(x.authorization == 2)this._router.navigate(['list']);
     //   if(x.authorization == 1)this._router.navigate(['applicant',this.user.id]);///['applicant/<returnObjectid>']
    //  }, 
    //  (error: any) => console.log(error), ()=> console.log('o.0')
   // );
   
   
      this._rxnormService.getRx(this.drugForm.value.password).subscribe(rx => {
      this.rxcui = rx.idGroup.rxnormId[0];
      this._rxnormService.getRx(this.drugForm.value.username).subscribe(rx2 => {
      this.rxcui2 = rx2.idGroup.rxnormId[0];

      this._rxnormService.getJSON(this.rxcui).subscribe(x => {
      this.interactionResponse = x;
     // let drugList: string[] = new Array();
      console.log("kitties?!" + this.interactionResponse.userInput.rxcui);

      for (let a of this.interactionResponse.interactionTypeGroup){
       // this.interactionTypeGroup.push(a);
        var interactionTypeGroup = a;
        for(let b of a.interactionType){
          for(let c of b.interactionPair){
            for(let d of c.interactionConcept){
            
              if (this.rxcui2 == d.minConceptItem.rxcui)
              this.drugList.push(c.description);
            }
          }
        }
      }

      console.log(this.drugList);
      console.log(this.drugForm.value);

    });});});
  }

  

}
