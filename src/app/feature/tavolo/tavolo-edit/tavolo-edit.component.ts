import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tavolo } from 'src/app/model/tavolo';
import { TavoloService } from '../tavolo.service';

@Component({
  selector: 'app-tavolo-edit',
  templateUrl: './tavolo-edit.component.html',
  styleUrls: ['./tavolo-edit.component.css']
})
export class TavoloEditComponent implements OnInit{
  tavolo:Tavolo = {esperienzaMinima: 0, cifraMinima: 0, denominazione: "", dataCreazione: new Date()};
  errorMessage: string = '';

  constructor(private _tavoloService:TavoloService, private _router:ActivatedRoute, private _route:Router){}
  
  ngOnInit(): void {
    let id:number = Number(this._router.snapshot.paramMap.get('id'))
    this._tavoloService.detailTavolo(id).subscribe(tItem => {
      this.tavolo.id = tItem.id
      this.tavolo.esperienzaMinima = tItem.esperienzaMinima
      this.tavolo.cifraMinima = tItem.cifraMinima
      this.tavolo.denominazione = tItem.denominazione
      this.tavolo.dataCreazione  = tItem.dataCreazione
      }
    )
  }

  edit(tavoloInput:NgForm){
    if(tavoloInput.valid){
      this._tavoloService.editTavolo(this.tavolo!).subscribe(
        {
          next: tavoloItem => {
            this.tavolo = tavoloItem;
            this.errorMessage = '';
          },
          error: () => this.errorMessage = 'Attenzione! Inserimento fallito!',
          complete: () => {
            if (!this.errorMessage)
              this._route.navigate([`tavolo`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
          }
        }
      )
    }else{
      this.errorMessage = "Attenzione, il form non è stato riempito correttamente"
    }
  }
}
