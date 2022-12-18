import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tavolo } from 'src/app/model/tavolo';

@Component({
  selector: 'app-tavolo-list',
  templateUrl: './tavolo-list.component.html',
  styleUrls: ['./tavolo-list.component.css']
})
export class TavoloListComponent {
  tavoloi?:Tavolo[];
  sub?: Subscription;

  constructor(){}

}
