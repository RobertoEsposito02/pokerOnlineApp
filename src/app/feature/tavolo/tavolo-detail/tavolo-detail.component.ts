import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tavolo } from 'src/app/model/tavolo';
import { TavoloService } from '../tavolo.service';

@Component({
  selector: 'app-tavolo-detail',
  templateUrl: './tavolo-detail.component.html',
  styleUrls: ['./tavolo-detail.component.css']
})
export class TavoloDetailComponent implements OnInit{
  tavolo!:Tavolo;

  constructor(private _tavoloService:TavoloService, private _router:ActivatedRoute){}
  
  ngOnInit(): void {
    let id:number = Number(this._router.snapshot.paramMap.get('id'))
    this._tavoloService.detailTavolo(id).subscribe(tItem => this.tavolo = tItem)
  }
}
