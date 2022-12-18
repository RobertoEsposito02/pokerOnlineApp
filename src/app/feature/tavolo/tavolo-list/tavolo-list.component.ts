import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Tavolo } from 'src/app/model/tavolo';
import { TavoloService } from '../tavolo.service';

@Component({
  selector: 'app-tavolo-list',
  templateUrl: './tavolo-list.component.html',
  styleUrls: ['./tavolo-list.component.css']
})
export class TavoloListComponent implements OnInit, OnDestroy{
  tavoli?:Tavolo[];
  sub?: Subscription;
  confirmMessage:string = "";

  constructor(private _tavoloService:TavoloService, public authService: AuthService){}

  ngOnInit(): void {
    this.sub = this._tavoloService.getTavoli().subscribe(tavoliListItem => this.tavoli = tavoliListItem)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
