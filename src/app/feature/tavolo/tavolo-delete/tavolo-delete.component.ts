import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tavolo } from 'src/app/model/tavolo';
import { TavoloService } from '../tavolo.service';

@Component({
  selector: 'app-tavolo-delete',
  templateUrl: './tavolo-delete.component.html',
  styleUrls: ['./tavolo-delete.component.css']
})
export class TavoloDeleteComponent implements OnInit{
  tavolo:Tavolo = {id:0,esperienzaMinima: 0, cifraMinima: 0, denominazione: "", dataCreazione: new Date()};
  errorMessage:string = "";

  constructor(private _tavoloService:TavoloService, private _router:ActivatedRoute, private _route:Router){}

  ngOnInit(): void {
    let id:number = Number(this._router.snapshot.paramMap.get('id'))
    this._tavoloService.detailTavolo(id).subscribe(tItem => this.tavolo = tItem)
  }

  delete(){
    let id:number = Number(this._router.snapshot.paramMap.get('id'))
    this._tavoloService.delete(id)
    if (!this.errorMessage)
      this._route.navigate([`tavolo`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
  }
}
