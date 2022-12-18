import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tavolo } from 'src/app/model/tavolo';
import { TavoloService } from '../tavolo.service';

@Component({
  selector: 'app-tavolo-create',
  templateUrl: './tavolo-create.component.html',
  styleUrls: ['./tavolo-create.component.css']
})
export class TavoloCreateComponent {
  tavolo:Tavolo = {esperienzaMinima: 0, cifraMinima: 0, denominazione: "", dataCreazione: new Date()};
  errorMessage: string = '';

  constructor(private _tavoloService:TavoloService, private _router:Router){}

  save(tavoloInput:NgForm){
    if(tavoloInput.valid){
      this._tavoloService.createTavolo(this.tavolo!).subscribe({
          next: tavoloItem => {
            this.tavolo = tavoloItem;
            this.errorMessage = '';
          },
          error: () => this.errorMessage = 'Attenzione! Inserimento fallito!',
          complete: () => {
            if (!this.errorMessage)
              this._router.navigate([`tavolo`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
          }
        }
      )
    }else{
      this.errorMessage = "Attenzione, il form non è stato riempito correttamente"
    }
  }
}
