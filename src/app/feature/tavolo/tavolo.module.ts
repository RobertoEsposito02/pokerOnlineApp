import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TavoloListComponent } from './tavolo-list/tavolo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path: '',
    component: TavoloListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    TavoloListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TavoloModule { }
